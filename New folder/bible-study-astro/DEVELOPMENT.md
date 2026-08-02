# Development Guide - Bible Study Hub

Quick reference for getting started with development.

## Prerequisites

- Node.js 16+ 
- npm or pnpm
- Git

## Setup

```bash
# Clone the repository
git clone <repo-url>
cd bible-study-astro

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Start development server
npm run dev
```

Visit `http://localhost:3000` and start developing!

## Project Commands

```bash
# Development
npm run dev          # Start dev server with hot reload

# Building
npm run build        # Production build to ./dist
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript types

# Utilities
npm run check        # Astro type check
```

## File Organization

```
src/
├── components/     # React/Astro components
├── layouts/        # Page layout templates
├── pages/          # Route handlers
├── content/        # Markdown content
├── constants/      # Config constants
├── utils/          # Helper functions
├── types/          # TypeScript types
└── styles/         # Global styles
```

## Adding Pages

Create a new file in `src/pages/`:

```astro
---
import MainLayout from '../layouts/MainLayout.astro';

const title = 'Page Title';
---

<MainLayout title={title}>
  <h1>Welcome</h1>
</MainLayout>
```

File automatically becomes a route. For dynamic routes, use `[param].astro`.

## Adding Components

Create in `src/components/`:

```astro
---
export interface Props {
  title: string;
  class?: string;
}

const { title, class: className } = Astro.props;
---

<div class={className}>
  <h2>{title}</h2>
  <slot />
</div>
```

## Styling

- **Global styles**: `src/styles/global.css`
- **Tailwind**: Configured in `tailwind.config.mjs`
- **Component styles**: Use Tailwind classes or `<style>` tags

## Working with Content

### Markdown Files

Store in `src/content/studies/` or `src/content/blog/`:

```markdown
---
title: "Title"
slug: "url-slug"
date: 2026-07-27
---

# Content here
```

### Content Collections

Defined in `src/content/config.ts` using Zod schemas. Provides type safety and validation.

## Configuration Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro settings |
| `tailwind.config.mjs` | Tailwind theme |
| `tsconfig.json` | TypeScript config |
| `.eslintrc.cjs` | Linting rules |
| `.prettierrc.json` | Code formatting |

## Environment Variables

Copy `.env.example` to `.env`:

```
SITE_URL=https://biblestudyhub.com
SITE_NAME=Bible Study Hub
COMPANY_EMAIL=support@biblestudyhub.com
```

Access in code:
```typescript
import.meta.env.SITE_NAME
```

## Debugging

### Enable Debug Mode

```bash
DEBUG=* npm run dev
```

### Browser DevTools

- Inspect elements
- Check network requests
- Review console errors

### Astro Debugging

```astro
---
const data = { test: true };
console.log(data);  // Shows in terminal
---
```

## Testing

Currently no test setup. To add:

```bash
npm install -D vitest
npm install -D @testing-library/astro
```

## Performance Tips

1. **Lazy load images**: Use `loading="lazy"`
2. **Code splitting**: Astro handles automatically
3. **Minimize bundles**: Remove unused dependencies
4. **Cache assets**: Configure in deployment

## Common Tasks

### Update Site Config

Edit `src/constants/config.ts`

### Change Colors

Edit `tailwind.config.mjs` or `src/styles/global.css`

### Add Navigation Link

Update `NAV_LINKS` in `src/constants/config.ts`

### Create Blog Post

1. Create file in `src/content/blog/my-post.md`
2. Add frontmatter with metadata
3. Write content in Markdown
4. Route automatically available at `/blog/my-post`

## Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .astro dist node_modules
npm install
npm run build
```

### Port Already in Use

```bash
npm run dev -- --port 3001
```

### Module Not Found

- Check file path
- Verify imports
- Restart dev server

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy ./dist folder
```

### GitHub Pages

Configure in `astro.config.mjs` and push to GitHub.

## IDE Setup

### VS Code Extensions

- Astro (official)
- Tailwind CSS IntelliSense
- Prettier
- ESLint

### VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Learning Resources

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## Getting Help

- Check documentation
- Search GitHub issues
- Ask in community Discord
- Email support@biblestudyhub.com

---

**Last Updated**: July 27, 2026
