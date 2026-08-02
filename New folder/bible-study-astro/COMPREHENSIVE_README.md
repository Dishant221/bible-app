# Bible Study Hub - Complete Project Documentation

A modern, production-ready **AI-powered Bible Study Platform** built with **Astro 4**, **Tailwind CSS**, and **TypeScript**.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Features](#features)
- [Components](#components)
- [Pages](#pages)
- [Utilities](#utilities)
- [Configuration](#configuration)
- [Development Guide](#development-guide)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🎯 Overview

Bible Study Hub is a comprehensive Bible study platform that combines:
- **AI-Powered Insights**: Claude-powered biblical analysis and commentary
- **Study Resources**: Comprehensive guides, blog articles, and theological insights
- **Beautiful Design**: Modern, responsive UI with premium aesthetics
- **Production Ready**: Optimized for performance, SEO, and accessibility
- **Scalable Architecture**: Well-organized component and content structure

### Key Technologies
- **Framework**: Astro 4 (Static Site Generation + SSR)
- **Styling**: Tailwind CSS 3 with custom theme
- **Language**: TypeScript 5
- **Content**: Markdown (MDX) with Zod validation
- **Tooling**: ESLint, Prettier, npm scripts

---

## 📁 Project Structure

```
bible-study-astro/
├── src/
│   ├── components/
│   │   ├── common/               # Layout components
│   │   │   ├── Header.astro      # Navigation header
│   │   │   └── Footer.astro      # Footer with links
│   │   ├── sections/             # Page section components
│   │   ├── ui/                   # Reusable UI components
│   │   │   ├── Button.astro      # Button with variants
│   │   │   ├── Card.astro        # Card component
│   │   │   ├── Badge.astro       # Badge labels
│   │   │   ├── Grid.astro        # Responsive grid
│   │   │   ├── Section.astro     # Section wrapper
│   │   │   ├── Hero.astro        # Hero sections
│   │   │   ├── CTA.astro         # Call-to-action
│   │   │   ├── FeatureCard.astro # Feature showcase
│   │   │   ├── PricingCard.astro # Pricing table
│   │   │   └── TestimonialCard.astro
│   │
│   ├── layouts/
│   │   ├── Base.astro            # Original editorial layout
│   │   ├── Layout.astro          # Legacy layout
│   │   └── MainLayout.astro      # Primary layout with components
│   │
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── about.astro           # About page
│   │   ├── features.astro        # Features page
│   │   ├── pricing.astro         # Pricing page
│   │   ├── faq.astro             # FAQ page
│   │   ├── contact.astro         # Contact form
│   │   ├── privacy.astro         # Privacy policy
│   │   ├── terms.astro           # Terms of service
│   │   ├── guides.astro          # Study guides index
│   │   ├── blog/
│   │   │   ├── index.astro       # Blog listing
│   │   │   └── [slug].astro      # Individual blog post
│   │   └── study/
│   │       ├── index.astro       # Study listing
│   │       └── [slug].astro      # Individual study
│   │
│   ├── content/
│   │   ├── config.ts             # Content collection config
│   │   ├── studies/              # Bible study content
│   │   │   └── john-15-vine.md
│   │   └── blog/                 # Blog posts (optional)
│   │
│   ├── constants/
│   │   └── config.ts             # Site configuration
│   │
│   ├── utils/
│   │   ├── date.ts               # Date formatting
│   │   ├── seo.ts                # SEO utilities
│   │   ├── helpers.ts            # General helpers
│   │   └── blog.ts               # Blog utilities
│   │
│   ├── types/
│   │   └── index.ts              # TypeScript types
│   │
│   └── styles/
│       └── global.css            # Global styles & animations
│
├── public/
│   ├── images/                   # Image assets
│   ├── icons/                    # Icon assets
│   └── favicon.svg
│
├── astro.config.mjs              # Astro configuration
├── tailwind.config.mjs           # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── .eslintrc.cjs                 # ESLint configuration
├── .prettierrc.json              # Prettier formatting
├── .env.example                  # Environment variables template
├── package.json                  # Dependencies
└── README.md                     # This file
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Start Development Server
```bash
npm run dev
```
Visit `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
npm run preview
```

---

## ✨ Features

### 🎨 Beautiful Components
- **Reusable UI Components**: Button, Card, Badge, Grid, Section
- **Hero Components**: Eye-catching hero sections
- **Forms**: Contact forms with validation
- **Testimonials**: Testimonial cards with ratings
- **Pricing Cards**: Responsive pricing tables

### 📄 Page Templates
- **Homepage**: Hero + Features + CTA
- **Features Page**: Detailed feature showcase
- **Pricing Page**: Comparison table + FAQ
- **About Page**: Company mission and values
- **Blog**: Article listing and detail pages
- **Guides**: Study guide directory
- **Contact**: Contact form with validation
- **Legal**: Privacy policy and terms

### 🔧 Developer Features
- **Type Safety**: Full TypeScript support
- **Content Validation**: Zod schema for content
- **SEO Optimization**: Meta tags, structured data
- **Performance**: Image optimization, code splitting
- **Accessibility**: WCAG compliant components
- **Code Quality**: ESLint + Prettier

---

## 🧩 Components

### UI Components (src/components/ui/)

#### Button.astro
```astro
<Button 
  href="/download"
  variant="primary"
  size="lg"
  icon="📥"
>
  Download Extension
</Button>
```

**Props:**
- `href`: Link destination
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `icon`: Optional emoji or icon
- `target`, `rel`: Link attributes

#### Card.astro
```astro
<Card hover={true} class="custom-class">
  <h3>Card Title</h3>
  <p>Card content here</p>
</Card>
```

#### Grid.astro
```astro
<Grid cols={3} gap={6}>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```

#### Section.astro
```astro
<Section id="features" class="bg-gray-50">
  <h2>Section Title</h2>
  <!-- Content -->
</Section>
```

#### Hero.astro
```astro
<Hero
  badge="✨ Trusted by Scholars"
  title="Bible Study Reimagined"
  description="Master Scripture with AI-Powered Insights"
  primaryCTA={{ text: "Download", href: "/download", icon: "📥" }}
/>
```

#### PricingCard.astro
```astro
<PricingCard
  name="Pro"
  price={4.99}
  description="Advanced features"
  features={['AI Insights', 'Offline Access', 'Custom Plans']}
  highlighted={true}
  cta={{ text: 'Get Started', href: '/pricing' }}
/>
```

### Common Components (src/components/common/)

#### Header.astro
Sticky navigation with mobile menu
- Logo
- Navigation links (configurable)
- Download CTA button
- Mobile hamburger menu

#### Footer.astro
Multi-column footer with:
- Brand info
- Link columns (Product, Learn, Legal)
- Social media links
- Copyright notice

---

## 📄 Pages

### Homepage (`src/pages/index.astro`)
- Hero section with gradient background
- Features showcase
- Stats cards
- Testimonials
- CTA sections

### Features (`src/pages/features.astro`)
- Feature card grid
- Detailed feature descriptions
- Comparison section
- Use case examples

### Pricing (`src/pages/pricing.astro`)
- Three-tier pricing cards
- Feature comparison table
- FAQ accordion
- CTA sections

### About (`src/pages/about.astro`)
- Mission statement
- Core values (6 cards)
- Team profiles
- Impact statistics

### Blog (`src/pages/blog/index.astro`)
- Article grid
- Category filter
- Search functionality
- Newsletter signup

### Guides (`src/pages/guides.astro`)
- Bible study guide directory
- Category organization
- What's included section
- CTA to features

### Contact (`src/pages/contact.astro`)
- Contact information (Email, Discord, Twitter)
- Contact form with validation
- Multiple subject options

### Legal Pages
- **Privacy** (`src/pages/privacy.astro`)
- **Terms** (`src/pages/terms.astro`)

---

## 🛠️ Utilities

### Date Utilities (`src/utils/date.ts`)
```typescript
formatDate(date)           // "July 27, 2026"
formatDateShort(date)      // "Jul 27, 2026"
getTimeAgo(date)           // "2 days ago"
isRecentDate(date, days)   // Boolean
```

### SEO Utilities (`src/utils/seo.ts`)
```typescript
generateSEOTags(props)      // Meta tags object
slugify(text)               // URL-safe slug
getReadingTime(content)     // Minutes to read
generateStructuredData(data) // JSON-LD script
```

### Helper Functions (`src/utils/helpers.ts`)
```typescript
cn()                        // Class name combiner
truncate(text, length)      // Truncate text with ellipsis
capitalize(text)            // Capitalize string
formatPrice(price)          // Format as currency
debounce(func, wait)        // Debounce function
throttle(func, limit)       // Throttle function
groupBy(array, key)         // Group array by key
uniq(array)                 // Remove duplicates
chunk(array, size)          // Chunk array
```

---

## ⚙️ Configuration

### Site Constants (`src/constants/config.ts`)
Central configuration for:
- Site metadata (name, URL, email)
- Navigation links
- Footer links
- Social media
- Features list
- Pricing plans
- FAQ items
- Testimonials

Update this file to change site-wide content.

### Astro Config (`astro.config.mjs`)
```javascript
- Site URL
- Integrations (Tailwind, MDX, Sitemap, Compression)
- Image optimization
- Build settings
- Vite configuration
```

### Tailwind Config (`tailwind.config.mjs`)
```javascript
- Color palette (primary, secondary, custom)
- Typography (fonts, sizes)
- Spacing scale
- Animations
- Responsive breakpoints
```

### TypeScript Config (`tsconfig.json`)
- Path aliases (@/*, @components/*, etc.)
- Strict mode enabled
- Astro JSX support

---

## 💻 Development Guide

### Adding a New Page

1. Create file in `src/pages/`
```astro
---
import MainLayout from '../layouts/MainLayout.astro';

const pageTitle = 'Page Title - Bible Study Hub';
const pageDescription = 'Page description for SEO';
---

<MainLayout title={pageTitle} description={pageDescription}>
  <!-- Page content -->
</MainLayout>
```

2. Use components from `src/components/`
3. Page automatically becomes a route

### Creating a New Component

1. Create file in `src/components/ui/` (or appropriate subfolder)
2. Define TypeScript interface for props:
```astro
---
export interface Props {
  title: string;
  description: string;
  class?: string;
}

const { title, description, class: className } = Astro.props;
---

<div class={`base-styles ${className || ''}`}>
  <h2>{title}</h2>
  <p>{description}</p>
  <slot />
</div>
```

3. Import and use in pages:
```astro
import MyComponent from '../components/MyComponent.astro';

<MyComponent title="Title" description="Desc" />
```

### Adding Blog Posts

1. Create `.md` file in `src/content/blog/`
2. Include frontmatter:
```markdown
---
title: "Article Title"
description: "Meta description"
author: "Author Name"
date: 2026-07-27
category: "Category"
tags: [tag1, tag2]
---

# Article content in Markdown
```

3. Page automatically generated at `/blog/[slug]`

### Code Quality Commands

```bash
# Format code
npm run format

# Check TypeScript
npm run type-check

# Lint code
npm run lint

# Build & preview
npm run build
npm run preview
```

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
Add to `astro.config.mjs`:
```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://username.github.io/repo',
  adapter: github(),
});
```

### Docker Deployment
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## 📚 Content Management

### Markdown Content
- Located in `src/content/`
- Collections: `studies`, `blog` (extensible)
- Validated with Zod schemas
- Frontmatter defines metadata

### Updating Site Constants
Edit `src/constants/config.ts`:
```typescript
export const SITE_NAME = 'Bible Study Hub';
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  // Add more links
];
```

### Managing Users/Comments
- No built-in user system yet
- Can integrate: Firebase, Supabase, Sanity CMS
- For email: SendGrid, Mailgun

---

## 🔐 Environment Setup

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Configure:
- `SITE_URL`: Your domain
- `COMPANY_EMAIL`: Contact email
- `RAZORPAY_KEY_ID/SECRET`: Payment processing
- `DATABASE_URL`: Optional database
- API keys for third-party services

---

## 📱 Responsive Design

All components are mobile-first responsive:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

Tailwind breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`

---

## ♿ Accessibility

Components include:
- Semantic HTML
- ARIA labels
- Focus management
- Keyboard navigation
- Contrast ratios (WCAG AA)
- Alt text for images

---

## 🔍 SEO

Built-in SEO features:
- Meta tags (title, description, OG)
- Structured data (JSON-LD)
- Sitemap auto-generation
- Robots.txt support
- Open Graph cards
- Twitter cards

---

## 📊 Performance

Optimizations included:
- Image lazy loading
- Code splitting
- CSS minification
- JavaScript compression
- Pre-fetching
- Caching strategies

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes with tests
4. Submit pull request

---

## 📝 License

Bible Study Hub © 2026. All rights reserved.

---

## 📞 Support

**Email**: support@biblestudyhub.com  
**Discord**: [Join Community](https://discord.gg/biblestudyhub)  
**Twitter**: [@biblestudyhub](https://twitter.com/biblestudyhub)

---

## 🙏 Acknowledgments

- Astro framework and community
- Tailwind CSS for design system
- Contributors and Bible scholars
- Our amazing community

---

**Last Updated**: July 27, 2026  
**Version**: 2.0.0
