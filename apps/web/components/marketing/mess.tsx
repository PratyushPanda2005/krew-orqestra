import { cn } from "@krew/ui/lib/utils"

import { mess } from "@/app/(marketing)/copy"

import { ChatBubble } from "./chat-bubble"
import { MessPlay } from "./mess-play"
import { Section } from "./section"

/**
 * "The mess today": example fragments drawn with our tokens, each with a caption.
 * With JS and motion allowed, MessPlay makes them arrive one by one like
 * notifications when the section comes into view; otherwise they're simply there.
 * Each `data-arrive` element takes its turn from `--i`.
 */
function Fragment({
  label,
  caption,
  i,
  className,
  children,
}: {
  label: string
  caption: string
  i: number
  className?: string
  children: React.ReactNode
}) {
  return (
    <figure data-arrive style={{ "--i": i } as React.CSSProperties} className={cn("flex flex-col gap-2", className)}>
      <div inert className="rounded-xl border bg-card p-3 select-none">
        <p className="mb-2 text-xs font-medium text-muted-foreground">{label}</p>
        {children}
      </div>
      <figcaption className="text-base font-medium">{caption}</figcaption>
    </figure>
  )
}

/** A named message in a group chat. */
function GroupLine({ who, children }: { who: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-0.5">
      <span className="text-[0.6875rem] font-semibold text-accent-foreground">{who}</span>
      <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-secondary px-3 py-2 text-sm leading-snug text-secondary-foreground">
        {children}
      </p>
    </div>
  )
}

const groupTitle = "condensed text-xl font-semibold lg:text-2xl"

export function Mess() {
  return (
    <Section id="mess" title={mess.title} intro={mess.intro}>
      <div data-mess className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-12">
        <div>
          <h3 className={groupTitle}>{mess.clientsTitle}</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <Fragment i={0} label="Instagram DM · 11:42 pm" caption={mess.captions.dm}>
              <ChatBubble from="them">hi! rate for pre-wedding shoot in pune?</ChatBubble>
            </Fragment>
            <Fragment i={2} label="WhatsApp · 9:05 am" caption={mess.captions.whatsapp}>
              <div className="flex flex-col items-end gap-1.5">
                <div className="flex w-40 flex-col gap-1 rounded-lg border border-dashed border-input bg-secondary p-2 text-xs text-muted-foreground">
                  <span className="h-12 rounded bg-background" />
                  quote-final-v3.jpg
                </div>
                <ChatBubble from="me">sending the quote screenshot again</ChatBubble>
              </div>
            </Fragment>
            <Fragment i={4} label="Gmail" caption={mess.captions.mail}>
              <div className="flex flex-col gap-0.5 rounded-lg bg-secondary px-3 py-2">
                <span className="truncate text-sm font-medium">Re: Re: Fwd: Invoice – Oct shoot</span>
                <span className="truncate text-xs text-muted-foreground">Meera, Accounts, you (7)</span>
              </div>
            </Fragment>
            <Fragment i={6} label="Notes" caption={mess.captions.note}>
              <p className="rounded-lg bg-warning-soft px-3 py-2 text-sm font-medium text-warning">
                Ask Meera for the advance (3rd time)
              </p>
            </Fragment>
          </div>
        </div>

        <div>
          <h3 className={groupTitle}>{mess.crewTitle}</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <Fragment i={1} label="WhatsApp · Kapoor wedding crew · 7:10 am" caption={mess.captions.date}>
              <div className="flex flex-col gap-2">
                <GroupLine who="Kabir">sangeet is 12th or 13th??</GroupLine>
                <GroupLine who="Kabir">need to book the drone</GroupLine>
              </div>
            </Fragment>
            <Fragment i={3} label="WhatsApp · Kapoor wedding crew · 10:48 pm" caption={mess.captions.brief}>
              <div className="flex flex-col gap-2">
                <GroupLine who="Sana">where&apos;s the brief? which songs did they want</GroupLine>
                <GroupLine who="Sana">scrolled up 400 messages, can&apos;t find it</GroupLine>
              </div>
            </Fragment>
            <Fragment i={5} label="WhatsApp · Mrs Kapoor · 1:15 pm" caption={mess.captions.twoReplies} className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <div className="flex flex-col gap-2">
                <ChatBubble from="me" time="Arjun">Full coverage is ₹1,25,000</ChatBubble>
                <ChatBubble from="me" time="Kabir">Ma&apos;am we can do it for ₹1,10,000</ChatBubble>
                <ChatBubble from="them">Which one is it?</ChatBubble>
              </div>
            </Fragment>
          </div>
        </div>
      </div>
      <p data-arrive style={{ "--i": 7 } as React.CSSProperties} className="condensed mt-10 text-2xl font-semibold lg:mt-14 lg:text-3xl">
        {mess.closing}
      </p>
      <MessPlay />
    </Section>
  )
}
