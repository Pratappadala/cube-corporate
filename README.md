# Cube Corporate

Next.js App Router + React + TypeScript implementation of the Cube Corporate public site and client portal prototype.

## Run locally

- `npm ci`
- `npm run dev`
- `npm run typecheck`
- `npm run build`

The production build exports to `out/`. Hosting configuration retains the existing private Site identity. Existing `.html` URLs are preserved by Next.js static export.

## Source structure

- `app/`: routes, metadata, root layout, public styling.
- `components/site/`: shared Header, Footer, SiteShell, homepage sections, public page content and ContactForm.
- `components/ui/`: reusable Card and accessible native-dialog Modal.
- `components/portal/`: AuthForm, Portal, shared Panel, PageHeading, Tabs, Badge, Progress, ProjectRow and DataTable.
- `lib/`: typed public-page registry, service content and portal models/demo fixtures.
- `public/`: images and route-specific auth/portal styles.

Public content uses JSX and shared React components; no legacy HTML injection or imperative screen rendering remains. Portal interactions use React state. The small DOM-based observer is used only for scroll reveals; listeners are cleaned up on unmount.

## Current boundaries

Authentication, enquiries, messages, approvals and profile edits are preview-only. Local document selection keeps File objects in browser memory without uploading. Portal state resets on reload. The current static export has no backend API routes or authentication enforcement; the portal contains sample data only. Approved policies, verified company claims and server integration remain future work.

## Verification

Production build and strict TypeScript checks; exported route, link, asset and hydration-script checks. Browser visual and end-to-end interaction testing remains pending because the supported browser QA capability is unavailable in this session.
