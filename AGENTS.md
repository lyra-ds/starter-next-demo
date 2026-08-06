# AGENTS.md

Guidance for AI agents (and humans) working in this repository — a minimal
Next.js template for [Lyra Design System](https://lyra-ds.dev).

## Lyra DS documentation

- Docs: https://lyra-ds.dev
- Machine-readable component contracts: https://lyra-ds.dev/llms.txt
- Packages: [`@lyra-ds/react`](https://www.npmjs.com/package/@lyra-ds/react)
  (components, `ThemeProvider`, `useTheme`) and
  [`@lyra-ds/styles`](https://www.npmjs.com/package/@lyra-ds/styles)
  (CSS, imported once in `app/layout.tsx`).
- **Never invent Lyra component APIs.** When unsure about a prop or variant,
  check llms.txt or the docs first — the published contracts are the source
  of truth.

## Commands

- `pnpm dev` — dev server · `pnpm build` — production build
- `pnpm test` — Vitest (jsdom) · `pnpm lint` — ESLint (next presets)
- `pnpm format` / `pnpm format:check` — Prettier
- CI runs lint, format check, tests, and build on every push and PR.

## Conventions

- TypeScript strict; App Router; server components by default
  (`"use client"` only for state/effects/browser APIs).
- Style: no semicolons, single quotes — Prettier enforces it; run
  `pnpm format` before committing.
- Tests: Vitest + Testing Library; query by role/label, never mock
  `@lyra-ds/react`.
- White-label branding happens through exactly four CSS variables
  (`--brand`, `--brand-contrast`, `--brand-radius`, `--brand-font`) —
  see `app/brand.css`. Don't restyle Lyra components ad hoc; derive from
  the brand tokens. The baseline Lyra look means no `data-brand`
  attribute at all — never set it without defining `--brand`.
- `components/starter-demo.tsx` is disposable demo content — template
  users delete it (see README "After cloning").

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
