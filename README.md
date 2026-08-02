# Scripture Depth — Bible Study Magazine Template

A premium, editorial-style Bible study website built on **Astro** + **Tailwind CSS**.
Designed to scale to thousands of studies by separating content from presentation.

---

## Project Philosophy

> Every layout decision is derived from print editorial design — specifically long-form magazine feature pages. The template is *structural*, not decorative: each section exists because it serves a distinct reader goal (context, language depth, application, preaching use).

---

## Architecture Map

```
scripture-depth/
│
├── astro.config.mjs           ← Astro + Tailwind + MDX setup
├── tailwind.config.mjs        ← Design token system (colors, type scale, spacing)
│
├── src/
│   ├── styles/
│   │   └── global.css         ← Font imports, base reset, component classes
│   │
│   ├── layouts/
│   │   └── Base.astro         ← HTML shell, <head>, nav, footer
│   │
│   ├── content/
│   │   ├── config.ts          ← Zod schema — validates every .md frontmatter at build time
│   │   └── studies/
│   │       ├── john-15-vine.md          ← Each file = one study page
│   │       ├── psalm-23-shepherd.md
│   │       └── romans-8-spirit.md
│   │
│   └── pages/
│       ├── index.astro        ← Homepage (build this separately)
│       └── study/
│           ├── index.astro    ← /study  — archive grid of all studies
│           └── [slug].astro   ← /study/[slug] — the dynamic study template
│
└── public/                    ← Static assets (favicon, og-default.jpg, etc.)
```

---

## URL Structure

| File | URL |
|------|-----|
| `src/pages/index.astro` | `domain.com/` |
| `src/pages/study/index.astro` | `domain.com/study` |
| `src/content/studies/john-15-vine.md` | `domain.com/study/john-15-vine` |
| `src/content/studies/psalm-23-shepherd.md` | `domain.com/study/psalm-23-shepherd` |

The URL is controlled by the `slug` field in the frontmatter — no filesystem magic needed.

---

## Adding a New Study (The Workflow)

1. **Duplicate** `src/content/studies/john-15-vine.md`
2. **Rename** it to match your passage, e.g. `psalm-23-shepherd.md`
3. **Fill in** all frontmatter fields (the Zod schema in `config.ts` validates these at build time — if a required field is missing, the build will error with a clear message)
4. **Write** the body prose in standard Markdown below the frontmatter `---` fence
5. **Run** `npm run build` — Astro generates a new `/study/psalm-23-shepherd` page automatically

That's the entire workflow. No code changes required.

---

## Content File Structure (All Frontmatter Fields)

```yaml
---
# IDENTITY
title:        "Your Poetic Headline"
subtitle:     "The hook subtitle shown in the hero"
slug:         "url-slug-here"           # → /study/url-slug-here
series:       "Optional Series Name"    # omit if standalone
publishDate:  2024-10-01
readingTime:  12                        # minutes (estimate)
author:       "Dr. Jane Smith"

# TAXONOMY
category:     Gospels                   # see schema enum for full list
testament:    New
book:         John
chapter:      15
verses:       "1-8"
tags:         [abiding, discipleship]

# HERO
heroImage:
  src:        "https://..."             # or /images/my-photo.jpg
  alt:        "Descriptive alt text"
  focalPoint: "center 40%"             # CSS object-position
  credit:     "Photo by Name / Source" # optional
accentColor:  olive                     # olive | slate | terra | gold

# SCRIPTURE FOCUS BLOCK
scriptureBlock:
  translation: ESV
  reference:   "John 15:1–5"
  keyVerse:    "John 15:5"
  verses:
    - ref:  "John 15:1"
      text: "I am the true vine..."

# HISTORICAL CONTEXT
historicalContext:
  period:   "c. AD 30"
  location: "Jerusalem, Judea"
  body: |
    Multi-paragraph Markdown prose here.
  timeline:                             # optional
    - year: "c. AD 30"
      event: "Event description"

# LANGUAGE INSIGHTS
languageInsights:
  language: Greek                       # Greek | Hebrew | Aramaic
  words:
    - word:           "μένω"
      transliteration: "menō"
      strongsNumber:  "G3306"
      definition:     "To remain, abide"
      significance:   "Why it matters here..."

# MODERN APPLICATION
modernApplication:
  intro: "Optional introductory paragraph..."
  points:
    - audience: "For the Weary Believer"
      heading:  "Point heading"
      body:     "Full paragraph..."

# PHOTO BREAKS
photoBreaks:
  - src:      "https://..."
    alt:      "Alt text"
    caption:  "Optional caption"
    position: full                      # full | left | right

# SERMON BLUEPRINT
sermonBlueprint:
  title:    "Sermon Title"
  bigIdea:  "One sentence that captures the whole message."
  points:
    - heading:   "Point 1 Heading"
      scripture: "John 15:1"
      subpoints:
        - "First sub-bullet"
        - "Second sub-bullet"
  closingCall: "The challenge/invitation for the congregation."
  suggestedHymns:
    - "Hymn Title (Author, Year)"

# CROSS-REFERENCES
crossReferences:
  - ref:  "Isaiah 5:1–7"
    note: "God's vineyard in the Old Testament"

# SEO (optional overrides)
seoTitle:       "Custom SEO Title | Scripture Depth"
seoDescription: "Custom meta description for search engines."
---

## Your Body Prose Begins Here

Write in standard Markdown. This section supports:
- **Bold** and *italic*
- ## Subheadings (render with Playfair Display)
- > Blockquotes (styled with gold left border)
- Standard paragraphs
```

---

## Design Token Reference

### Colors
| Token | Hex | Use |
|-------|-----|-----|
| `parchment` | `#fcfbfa` | Page background |
| `charcoal`  | `#2c2a29` | Primary headings |
| `ink`       | `#1a1917` | Footer, deep elements |
| `ink-muted` | `#5a5754` | Body text |
| `ink-light` | `#8c8986` | Captions, meta |
| `rule`      | `#e2ddd8` | Dividers, borders |
| `olive`     | `#6b7355` | Accent option |
| `slate`     | `#4a6080` | Accent option |
| `terra`     | `#b06040` | Accent option |
| `gold`      | `#c09a4a` | Accent default |

### Type Scale
| Class | Size | Font | Use |
|-------|------|------|-----|
| `text-display-xl` | clamp(3–6.5rem) | Playfair Display | Hero title |
| `text-display-lg` | clamp(2.25–4rem) | Playfair Display | Section titles |
| `text-display-md` | clamp(1.75–2.5rem) | Playfair Display | Card/block titles |
| `text-heading`    | clamp(1.25–1.75rem) | Playfair Display | Sidebar headings |
| `text-body-lg`    | 1.125rem | Inter | Scripture, pull quotes |
| `text-body`       | 1rem | Inter | Body prose |
| `text-caption`    | 0.8125rem | Inter | Meta, labels, captions |
| `label-eyebrow`   | 0.75rem + wide tracking | Inter 600 | Section labels |

---

## Deployment

```bash
# Local development
npm install
npm run dev

# Production build
npm run build        # Outputs to ./dist/
npm run preview      # Preview the production build locally
```

**Recommended hosts (all support Astro static output):**
- Vercel → `vercel deploy`
- Netlify → connect repo, build command: `npm run build`, publish dir: `dist`
- Cloudflare Pages → same as Netlify
- GitHub Pages → add `@astrojs/github-pages` adapter

---

## Extending the Template

### Add a new section type
1. Design the frontmatter schema in `src/content/config.ts` (add a new Zod schema)
2. Add the section to `src/pages/study/[slug].astro`
3. Update `john-15-vine.md` with sample data to test

### Add a new page type (e.g., /series/[name])
1. Create `src/pages/series/[name].astro`
2. Add a `series` collection to `src/content/config.ts`
3. Add `.md` files to `src/content/series/`

### Add an RSS feed
```bash
npx astro add @astrojs/rss
```
Then create `src/pages/rss.xml.js` using Astro's RSS helpers.
