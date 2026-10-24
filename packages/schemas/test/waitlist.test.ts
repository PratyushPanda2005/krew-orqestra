import { describe, expect, it } from "vitest";
import { WaitlistSignup, waitlistFields } from "../src/waitlist";

const valid = {
  name: " Riya ",
  skill: "photo",
  city: "Pune",
  plan: "kreator",
  instagram: "",
  contact: "98765 43210",
};

const firstError = (field: keyof typeof waitlistFields, value: unknown) => {
  const r = waitlistFields[field].safeParse(value);
  return r.success ? undefined : r.error.issues[0]?.message;
};

describe("waitlist sign-up", () => {
  it("accepts a valid sign-up and tidies it", () => {
    const r = WaitlistSignup.parse(valid);
    expect(r).toEqual({
      name: "Riya",
      skill: "photo",
      city: "Pune",
      plan: "kreator",
      instagram: undefined,
      contact: { kind: "phone", value: "+919876543210" },
    });
  });

  it("reads Indian mobile numbers in common forms", () => {
    for (const raw of ["9876543210", "+91 98765 43210", "919876543210", "09876543210", "98765-43210"]) {
      expect(waitlistFields.contact.parse(raw)).toEqual({ kind: "phone", value: "+919876543210" });
    }
  });

  it("reads email addresses", () => {
    expect(waitlistFields.contact.parse(" Riya@Example.com ")).toEqual({ kind: "email", value: "riya@example.com" });
  });

  it("rejects contacts that are neither", () => {
    const msg = "Enter a 10-digit mobile number or an email address.";
    expect(firstError("contact", "")).toBe(msg);
    expect(firstError("contact", "12345")).toBe(msg);
    expect(firstError("contact", "5876543210")).toBe(msg);
    expect(firstError("contact", "riya@")).toBe(msg);
  });

  it("strips the @ from Instagram handles and rejects bad ones", () => {
    expect(waitlistFields.instagram.parse("@Riya.Shoots")).toBe("riya.shoots");
    expect(waitlistFields.instagram.parse("riya_shoots")).toBe("riya_shoots");
    expect(firstError("instagram", "riya shoots")).toBe("That doesn't look like an Instagram handle.");
    expect(firstError("instagram", "riya..shoots")).toBe("That doesn't look like an Instagram handle.");
  });

  it("says what is missing in plain words", () => {
    expect(firstError("name", "  ")).toBe("Enter your name.");
    expect(firstError("city", undefined)).toBe("Enter your city.");
    expect(firstError("skill", undefined)).toBe("Pick what you do.");
    expect(firstError("skill", "music")).toBe("Pick what you do.");
    expect(firstError("plan", null)).toBe("Pick one.");
  });
});
