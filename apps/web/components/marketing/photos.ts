import type { StaticImageData } from "next/image"

import clients1 from "@/app/(marketing)/images/clients-1.jpg"
import clients2 from "@/app/(marketing)/images/clients-2.jpg"
import clients3 from "@/app/(marketing)/images/clients-3.jpg"
import how1 from "@/app/(marketing)/images/how-1.jpg"
import how2 from "@/app/(marketing)/images/how-2.jpg"
import how3 from "@/app/(marketing)/images/how-3.jpg"
import how4 from "@/app/(marketing)/images/how-4.jpg"
import how5 from "@/app/(marketing)/images/how-5.jpg"
import how6 from "@/app/(marketing)/images/how-6.jpg"
import how7 from "@/app/(marketing)/images/how-7.jpg"
import messBrief from "@/app/(marketing)/images/mess-brief.jpg"
import messChasing from "@/app/(marketing)/images/mess-chasing.jpg"
import messDate from "@/app/(marketing)/images/mess-date.jpg"
import messDm from "@/app/(marketing)/images/mess-dm.jpg"
import messEmail from "@/app/(marketing)/images/mess-email.jpg"
import messScreenshots from "@/app/(marketing)/images/mess-screenshots.jpg"
import messTwoReplies from "@/app/(marketing)/images/mess-two-replies.jpg"
import trust1 from "@/app/(marketing)/images/trust-1.jpg"
import trust2 from "@/app/(marketing)/images/trust-2.jpg"
import trust3 from "@/app/(marketing)/images/trust-3.jpg"
import trust4 from "@/app/(marketing)/images/trust-4.jpg"

/**
 * Stock photos for the landing sections (Unsplash License; credits in images/CREDITS.md).
 * Static imports give next/image the size, so every photo reserves its box (no layout shift).
 * Alt text says what's in the photo; where a caption beside it carries the meaning, it stays short.
 */
export type Photo = { src: StaticImageData; alt: string }

export const messPhotos = {
  dm: { src: messDm, alt: "A woman in a pink sari reading messages on her phone" },
  whatsapp: { src: messScreenshots, alt: "A woman checking her phone outdoors" },
  mail: { src: messEmail, alt: "A woman working at a laptop" },
  note: { src: messChasing, alt: "A woman on a phone call" },
  date: { src: messDate, alt: "A video crew on a street shoot with a camera gimbal" },
  brief: { src: messBrief, alt: "An editor in headphones at a computer in a dark room" },
  twoReplies: { src: messTwoReplies, alt: "Two people looking at one phone" },
} satisfies Record<string, Photo>

/** One per step of "How a job runs", in order: wide, quiet landscapes, in trionn's 670 × 460 card. */
export const howPhotos: Photo[] = [
  { src: how1, alt: "Layered blue mountain ranges fading into the sky" },
  { src: how2, alt: "Sand dunes below mountains under a cloudy sky" },
  { src: how3, alt: "White sand stretching to a mountain range" },
  { src: how4, alt: "Golden plains below snow-capped mountains" },
  { src: how5, alt: "Dark hills at dusk with the sea beyond" },
  { src: how6, alt: "The moon above pale dunes at dusk" },
  { src: how7, alt: "Jagged mountains behind grassy dunes and black sand" },
]

/**
 * "Your clients never make an account" uses light abstract art, as the reference's case-study
 * cards do, so the dark text can sit straight on the image. The reference's own images aren't
 * licensed for reuse, so these are free look-alikes.
 */
export const clientPhotos: Photo[] = [
  { src: clients1, alt: "White sculpted waves on a pale grey ground" },
  { src: clients2, alt: "Soft folds of lilac and pink" },
  { src: clients3, alt: "Curved layers of cream and peach paper" },
]

/**
 * "What we promise" uses art, not people, as the reference's Services rows do (abstract,
 * gallery-like pieces). The reference's own images aren't licensed for reuse (its Licenses
 * page: demo media "not licensed for redistribution"), so these are free look-alikes.
 */
export const trustPhotos: Photo[] = [
  { src: trust1, alt: "A translucent, iridescent knotted form on a grey ground" },
  { src: trust2, alt: "Stacked glass cubes in soft blue light" },
  { src: trust3, alt: "A single glass cube tilted on a pale blue background" },
  { src: trust4, alt: "People in a dark gallery beneath a giant glowing moon" },
]
