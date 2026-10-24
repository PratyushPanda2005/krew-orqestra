import * as z from "zod/mini";
import { SKILLS } from "./options";

/**
 * Pilot waitlist sign-up from the public landing page, in two steps: a contact
 * first (the whole sign-up), then optional details about the creator's work.
 * The same schema runs on blur in the browser and in the server action, so both
 * show the same words. Written with zod/mini because it ships to the browser on
 * a 4G landing page.
 */

const blankToUndefined = (v: unknown) => (typeof v === "string" && v.trim() === "" ? undefined : v);

/** Indian mobile: 10 digits starting 6–9, with an optional +91, 91 or 0 in front. */
const indianMobile = /^(?:\+?91|0)?([6-9]\d{9})$/;
const contactMessage = "Enter a 10-digit mobile number or an email address.";
const email = z.email();

export const WaitlistContact = z.pipe(
  z.string({ error: contactMessage }).check(z.trim(), z.minLength(1, contactMessage)),
  z.transform((raw: string, ctx) => {
    const phone = indianMobile.exec(raw.replace(/[\s-]/g, ""));
    if (phone) return { kind: "phone" as const, value: `+91${phone[1]}` };
    if (email.safeParse(raw).success) return { kind: "email" as const, value: raw.toLowerCase() };
    ctx.issues.push({ code: "custom", message: contactMessage, input: raw });
    return z.NEVER;
  })
);

/** Step 2, after the contact is saved. The step can be skipped; if it's sent, name, skill and city are needed. */
export const waitlistDetailFields = {
  name: z
    .string({ error: "Enter your name." })
    .check(z.trim(), z.minLength(1, "Enter your name."), z.maxLength(80, "Keep your name under 80 characters.")),
  skill: z.enum(SKILLS, { error: "Pick what you do." }),
  city: z
    .string({ error: "Enter your city." })
    .check(z.trim(), z.minLength(1, "Enter your city."), z.maxLength(60, "Keep the city under 60 characters.")),
  instagram: z.pipe(
    z.transform(blankToUndefined),
    z.optional(
      z.pipe(
        z
          .string()
          .check(
            z.trim(),
            z.regex(/^@?(?!.*\.\.)(?!.*\.$)[A-Za-z0-9._]{1,30}$/, "That doesn't look like an Instagram handle.")
          ),
        z.transform((h: string) => h.replace(/^@/, "").toLowerCase())
      )
    )
  ),
};

export const waitlistFields = { contact: WaitlistContact, ...waitlistDetailFields };

export type WaitlistField = keyof typeof waitlistFields;
export type WaitlistDetailField = keyof typeof waitlistDetailFields;

export type WaitlistContact = z.output<typeof WaitlistContact>;
export const WaitlistDetails = z.object(waitlistDetailFields);
export type WaitlistDetails = z.output<typeof WaitlistDetails>;
