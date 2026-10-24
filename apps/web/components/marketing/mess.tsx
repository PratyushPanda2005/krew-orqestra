import { cn } from "@krew/ui/lib/utils"

import { mess } from "@/app/(marketing)/copy"

import { ChatBubble } from "./chat-bubble"
import { Section } from "./section"

/** "The mess today": example fragments drawn with our tokens, each with a caption. */
function Fragment({ label, caption, className, children }: { label: string; caption: string; className?: string; children: React.ReactNode }) {
  return (
    <figure className={cn("flex flex-col gap-2", className)}>
      <div inert className="rounded-xl border bg-card p-3 select-none">
        <p className="mb-2 text-xs font-medium text-muted-foreground">{label}</p>
        {children}
      </div>
      <figcaption className="text-base font-medium">{caption}</figcaption>
    </figure>
  )
}

export function Mess() {
  return (
    <Section id="mess" title={mess.title}>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:gap-x-10 lg:gap-y-8">
        <Fragment label="Instagram DM · 11:42 pm" caption={mess.captions.dm}>
          <ChatBubble from="them">hi! rate for pre-wedding shoot in pune?</ChatBubble>
        </Fragment>
        <Fragment label="WhatsApp · 9:05 am" caption={mess.captions.whatsapp} className="sm:mt-10">
          <div className="flex flex-col items-end gap-1.5">
            <div className="flex w-40 flex-col gap-1 rounded-lg border border-dashed border-input bg-secondary p-2 text-xs text-muted-foreground">
              <span className="h-12 rounded bg-background" />
              quote-final-v3.jpg
            </div>
            <ChatBubble from="me">sending the quote screenshot again</ChatBubble>
          </div>
        </Fragment>
        <Fragment label="Gmail" caption={mess.captions.mail}>
          <div className="flex flex-col gap-0.5 rounded-lg bg-secondary px-3 py-2">
            <span className="truncate text-sm font-medium">Re: Re: Fwd: Invoice – Oct shoot</span>
            <span className="truncate text-xs text-muted-foreground">Meera, Accounts, you (7)</span>
          </div>
        </Fragment>
        <Fragment label="Notes" caption={mess.captions.note} className="sm:mt-10">
          <p className="rounded-lg bg-warning-soft px-3 py-2 text-sm font-medium text-warning">
            Ask Meera for the advance (3rd time)
          </p>
        </Fragment>
      </div>
      <p className="condensed mt-10 text-2xl font-semibold lg:mt-14 lg:text-3xl">{mess.closing}</p>
    </Section>
  )
}
