import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@krew/ui", "@krew/schemas", "@krew/flows"],
}

export default nextConfig
