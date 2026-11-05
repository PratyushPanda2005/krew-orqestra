"use client"

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react"

/** How far the book rises out of its sleeve on hover, and how far it can be dragged up. */
const LIFT = 72
const MAX_DRAG = 250
const EASE = "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)"

/**
 * Chapter book in its frosted sleeve, as on the reference: on hover it rises 72 px out of the sleeve;
 * press and drag pulls it up to 250 px, and it springs back on release. "Read part" darkens and its
 * arrow slides in. Only with a fine pointer at 768 px and up; on touch it stays put.
 */
export function ChapterCard({ href, children }: { href: string; children: ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [fine, setFine] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [drag, setDrag] = useState(0)
  const [dragging, setDragging] = useState(false)
  const pressed = useRef(false)
  const moved = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 768px)")
    const update = () => setFine(mq.matches && !matchMedia("(prefers-reduced-motion: reduce)").matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  // The book itself is the element marked data-lift inside the card markup.
  useEffect(() => {
    const book = ref.current?.querySelector<HTMLElement>("[data-lift]")
    if (!book) return
    book.style.transform = fine ? `translateY(${(hovered ? -LIFT : 0) + drag}px)` : ""
    book.style.transition = fine && !dragging ? EASE : "none"
  }, [fine, hovered, drag, dragging])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    pressed.current = true
    moved.current = false
    setDragging(true)
    const startY = e.clientY
    const move = (ev: MouseEvent) => {
      if (!pressed.current) return
      const dy = ev.clientY - startY
      if (Math.abs(dy) > 4) moved.current = true
      setDrag(Math.max(-MAX_DRAG, Math.min(0, dy)))
    }
    const up = () => {
      pressed.current = false
      setDragging(false)
      setDrag(0)
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseup", up)
    }
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseup", up)
  }, [])

  // The two wrappers have no box of their own until the sideways row plays (how-scroll.css).
  return (
    <div data-job-panel className="job-book">
      <span aria-hidden data-job-line className="job-line" />
      <div data-job-card className="job-book-rise">
        <a
          ref={ref}
          href={href}
          draggable={false}
          className={`${fine ? "group" : ""} shrink-0 select-none block`}
          style={fine ? { cursor: dragging ? "grabbing" : "grab" } : undefined}
          onMouseEnter={fine ? () => setHovered(true) : undefined}
          onMouseLeave={
            fine
              ? () => {
                  setHovered(false)
                  if (!pressed.current) setDrag(0)
                }
              : undefined
          }
          onMouseDown={fine ? onMouseDown : undefined}
          onClickCapture={
            fine
              ? (e) => {
                  // A drag is not a click.
                  if (moved.current) {
                    e.preventDefault()
                    e.stopPropagation()
                    moved.current = false
                  }
                }
              : undefined
          }
        >
          {children}
        </a>
      </div>
    </div>
  )
}
