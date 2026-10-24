import { footer } from "@/app/(marketing)/copy"
import { site } from "@/lib/site"

import { container, focusRing } from "./styles"

// A privacy policy link goes here once the page exists (needed before launch, plan §13).
export function MarketingFooter() {
  return (
    <footer className="border-t py-10 text-sm text-muted-foreground">
      <div className={`${container} flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between`}>
        <div>
          <p className="condensed text-xl font-semibold text-foreground">Krew</p>
          <p>{footer.tagline}</p>
        </div>
        <div className="flex flex-col gap-1 sm:items-end">
          <p>
            {footer.contact}:{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className={`inline-flex min-h-tap items-center text-foreground underline underline-offset-4 ${focusRing}`}
            >
              {site.contactEmail}
            </a>
          </p>
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
