import type { MetadataRoute } from "next"

import { site } from "@/lib/site"

/**
 * Everything may be crawled. The workbench (/dev, /design) is kept out of search
 * with a noindex tag instead of a Disallow, because a disallowed page is never
 * fetched, so its noindex would never be seen.
 */
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` }
}
