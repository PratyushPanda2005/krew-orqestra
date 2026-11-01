import "react"

// Inline styles in /v2 set CSS custom properties such as `--stagger` directly.
declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
}
