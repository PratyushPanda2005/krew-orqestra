import { cn } from "@krew/ui/lib/utils"

type ChatBubbleProps = {
  from: "them" | "me" | "bot"
  children: React.ReactNode
  time?: string
  className?: string
}

/** A chat message drawn with our own tokens. No platform logos or look-alike UI. */
export function ChatBubble({ from, children, time, className }: ChatBubbleProps) {
  return (
    <div className={cn("flex flex-col gap-0.5", from === "them" ? "items-start" : "items-end", className)}>
      {from === "bot" && <span className="text-[0.6875rem] font-medium text-accent-foreground">Automated</span>}
      <p
        className={cn(
          "max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-snug",
          from === "them" && "rounded-bl-sm bg-secondary text-secondary-foreground",
          from === "me" && "rounded-br-sm bg-primary text-primary-foreground",
          from === "bot" && "rounded-br-sm bg-accent text-accent-foreground"
        )}
      >
        {children}
      </p>
      {time && <span className="text-[0.6875rem] text-muted-foreground tabular">{time}</span>}
    </div>
  )
}
