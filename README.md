# Ryan Simpson Portfolio (Next.js)

Personal portfolio built with Next.js App Router, TypeScript, styled-components, and Three.js.

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Tooling Standards

- ESLint with `next/core-web-vitals`
- Prettier + `.editorconfig`
- Husky + lint-staged pre-commit checks
- TypeScript strict mode

## SEO / Accessibility / Performance

- Route metadata (title, description, canonical)
- Base OpenGraph + Twitter metadata
- JSON-LD (`Person`, `WebSite`, `SoftwareSourceCode`)
- `sitemap.xml` and `robots.txt` via App Router metadata routes
- Skip link and improved keyboard focus visibility
- Dynamic import for heavy canvas rendering
- Optimized `next/image` usage (`priority` + responsive `sizes`)

## Notes

- Lighthouse and axe targets are intended to run in CI/preview with network access.
- In this environment, external network calls (for remote assets) may be blocked.
