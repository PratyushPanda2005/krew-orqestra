import { Fragment } from "react"

/**
 * Splits text into per-letter spans for the reference's letter effects. It runs on the server,
 * so nothing shifts when JS arrives. Screen readers get the plain text; the letters are hidden
 * from them. `start` continues the numbering across several parts of one heading; `total` is
 * the letter count for the whole heading (it sets the stagger). `scatter` gives each letter a
 * fixed pseudo-random order (--r, 0 to 1) for trionn's blur-in, the same on server and client.
 */
export function Split({
  text,
  start = 0,
  total,
  scatter,
  className,
}: {
  text: string
  start?: number
  total?: number
  scatter?: boolean
  className?: string
}) {
  let n = start
  const words = text.split(" ")
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden className={className} style={{ "--n": total ?? letters(text) } as React.CSSProperties}>
        {words.map((w, wi) => (
          <Fragment key={wi}>
            <span className="inline-block whitespace-nowrap">
              {[...w].map((c, ci) => {
                const i = n++
                const style = scatter ? { "--i": i, "--r": ((i * 37 + 11) % 23) / 22 } : { "--i": i }
                return (
                  <span key={ci} data-char style={style as React.CSSProperties}>
                    {c}
                  </span>
                )
              })}
            </span>
            {wi < words.length - 1 && " "}
          </Fragment>
        ))}
      </span>
    </>
  )
}

/** Letters in a string, counted as Split counts them. */
export const letters = (text: string) => text.replace(/ /g, "").length
