/**
 * The soft blur along the bottom edge of the screen, after novaform's "bottom blur": four
 * stacked layers that blur what's behind them (16, 8, 4 and 2 px), each masked to a band, so
 * the blur is strongest at the very bottom and fades out about 6 rem up. Fixed, ignores the
 * pointer, desktop only (marketing.css), as on the reference. Decorative.
 */
export function BottomBlur() {
  return (
    <div aria-hidden data-bottom-blur>
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}
