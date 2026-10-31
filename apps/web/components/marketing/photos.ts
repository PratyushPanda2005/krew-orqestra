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
import mess1 from "@/app/(marketing)/images/mess-1.jpg"
import mess2 from "@/app/(marketing)/images/mess-2.jpg"
import mess3 from "@/app/(marketing)/images/mess-3.jpg"
import mess4 from "@/app/(marketing)/images/mess-4.jpg"
import mess5 from "@/app/(marketing)/images/mess-5.jpg"
import mess6 from "@/app/(marketing)/images/mess-6.jpg"
import mess7 from "@/app/(marketing)/images/mess-7.jpg"
import next from "@/app/(marketing)/images/next.jpg"
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

/**
 * The mess ribbon's panels: wide, quiet landscapes (Unsplash License; images/CREDITS.md), in the
 * ribbon's order so the colours alternate. Each stands behind one fragment of the mess; the
 * caption in the window says which, so the alt text just says what's in the photo.
 */
export const messPhotos = {
  dm: { src: mess1, alt: "A misty blue valley between steep mountains" },
  date: { src: mess2, alt: "Golden sand dunes seen from above" },
  whatsapp: { src: mess3, alt: "Surf over black rocks below snowy peaks" },
  brief: { src: mess4, alt: "A turquoise sea breaking on a sandy cove, from above" },
  mail: { src: mess5, alt: "Soft pink sand dunes under a hazy sky" },
  twoReplies: { src: mess6, alt: "Dark mountains under a stormy sky beyond a black sand beach" },
  note: { src: mess7, alt: "An orange river of sand through dark rock, from high above" },
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

/**
 * The closing photo screen: Vantra's own long-exposure photo from its "Build what's next"
 * section, used with permission (31 Oct 2026; images/CREDITS.md).
 */
export const nextPhoto: Photo = { src: next, alt: "A figure walking away through streaks of coloured light in the dark" }
