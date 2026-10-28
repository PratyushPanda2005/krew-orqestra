import type { StaticImageData } from "next/image"

import clientsQuote from "@/app/(marketing)/images/clients-quote.jpg"
import clientsReview from "@/app/(marketing)/images/clients-review.jpg"
import howEnquiry from "@/app/(marketing)/images/how-enquiry.jpg"
import howInvoice from "@/app/(marketing)/images/how-invoice.jpg"
import howPaid from "@/app/(marketing)/images/how-paid.jpg"
import howQuote from "@/app/(marketing)/images/how-quote.jpg"
import howReview from "@/app/(marketing)/images/how-review.jpg"
import howWork from "@/app/(marketing)/images/how-work.jpg"
import messBrief from "@/app/(marketing)/images/mess-brief.jpg"
import messChasing from "@/app/(marketing)/images/mess-chasing.jpg"
import messDate from "@/app/(marketing)/images/mess-date.jpg"
import messDm from "@/app/(marketing)/images/mess-dm.jpg"
import messEmail from "@/app/(marketing)/images/mess-email.jpg"
import messScreenshots from "@/app/(marketing)/images/mess-screenshots.jpg"
import messTwoReplies from "@/app/(marketing)/images/mess-two-replies.jpg"
import trail1 from "@/app/(marketing)/images/trail-1.jpg"
import trail2 from "@/app/(marketing)/images/trail-2.jpg"
import trail3 from "@/app/(marketing)/images/trail-3.jpg"
import trail4 from "@/app/(marketing)/images/trail-4.jpg"
import trail5 from "@/app/(marketing)/images/trail-5.jpg"
import trail6 from "@/app/(marketing)/images/trail-6.jpg"
import trail7 from "@/app/(marketing)/images/trail-7.jpg"
import trail8 from "@/app/(marketing)/images/trail-8.jpg"
import trustChats from "@/app/(marketing)/images/trust-chats.jpg"
import trustConnections from "@/app/(marketing)/images/trust-connections.jpg"
import trustGst from "@/app/(marketing)/images/trust-gst.jpg"

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

/** One per step of "How a job runs", in order. The Advance step uses the UPI tile instead. */
export const howPhotos: (Photo | null)[] = [
  { src: howEnquiry, alt: "A bride and groom at their wedding" },
  { src: howQuote, alt: "A photographer at a desk with his camera" },
  null,
  { src: howWork, alt: "A video crew filming in a field" },
  { src: howReview, alt: "An editor at a desk with several monitors" },
  { src: howInvoice, alt: "A desk with monitors and camera kit" },
  { src: howPaid, alt: "A smiling photographer holding his camera" },
]

export const clientPhotos: (Photo | null)[] = [
  { src: clientsQuote, alt: "A couple on their wedding stage" },
  { src: clientsReview, alt: "An editing desk with a camera and monitors" },
  null,
]

export const trustPhotos: (Photo | null)[] = [
  { src: trustChats, alt: "A black-and-white portrait of a photographer behind his camera" },
  null,
  { src: trustGst, alt: "A designer drawing on a pen tablet at a desk" },
  { src: trustConnections, alt: "A photographer holding a camera up to his face" },
]

/** Decorative: the photo row that runs along the bottom of "Join the pilot". */
export const trailPhotos = [trail1, trail2, trail3, trail4, trail5, trail6, trail7, trail8]

/** Decorative: the photo column beside the questions, one per question. */
export const faqPhotos = [trail1, trail4, trail6, trail2, trail3, trail7]
