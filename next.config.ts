import type { NextConfig } from 'next'

// The GitHub Pages build is a static export served from a subpath
// (https://lyra-ds.github.io/starter-next-demo). Local dev keeps serving from
// the root, so the export settings are applied only when the Pages workflow
// sets GITHUB_PAGES=true.
const isGithubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: 'export',
        basePath: '/starter-next-demo',
        images: { unoptimized: true },
      }
    : {}),
  // Dev assets (/_next/*) are requested cross-origin when the app is accessed
  // through the Tailscale serve proxy; without this Next 16 answers 403.
  allowedDevOrigins: ['dev.lynx-kelvin.ts.net'],
}

export default nextConfig
