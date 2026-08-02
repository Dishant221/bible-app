// src/content/config.ts
// Astro Content Collections schema — validates every study .md file at build time

import { defineCollection, z } from 'astro:content';

// ── Reusable sub-schemas ──────────────────────────────────────

const VerseSchema = z.object({
  ref:  z.string(),          // e.g. "John 15:1"
  text: z.string(),          // Full verse text
});

const HebrewGreekWordSchema = z.object({
  word:        z.string(),   // Original language word
  transliteration: z.string(),
  strongsNumber:   z.string().optional(),
  definition:  z.string(),
  significance: z.string(), // Why it matters for this passage
});

const ApplicationPointSchema = z.object({
  audience:    z.string(),   // e.g. "The Weary Believer", "Church Leaders"
  heading:     z.string(),
  body:        z.string(),
});

const SermonPointSchema = z.object({
  heading:     z.string(),
  subpoints:   z.array(z.string()).optional(),
  scripture:   z.string().optional(), // Supporting verse ref
});

const PhotoBreakSchema = z.object({
  src:         z.string(),   // Relative path or absolute URL
  alt:         z.string(),
  caption:     z.string().optional(),
  position:    z.enum(['full', 'left', 'right']).default('full'),
});

// ── Main Study Collection ─────────────────────────────────────

const studies = defineCollection({
  type: 'content',
  schema: z.object({

    // ── Identity ──────────────────────────────────────────────
    title:       z.string(),          // Display headline (can be poetic)
    subtitle:    z.string(),          // Hook under the title
    //slug:        z.string(),          // URL slug, e.g. "john-15-vine"
    series:      z.string().optional(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readingTime: z.number(),          // Minutes — calculated or manual
    author:      z.string().default('Editorial Team'),

    // ── Taxonomy ──────────────────────────────────────────────
    category:    z.enum([
      'Gospels', 'Epistles', 'Wisdom Literature', 'Prophecy',
      'Torah', 'Historical Books', 'Psalms', 'Revelation', 'Doctrinal'
    ]),
    tags:         z.array(z.string()).default([]),
    testament:    z.enum(['Old', 'New']),
    book:         z.string(),         // e.g. "John"
    chapter:      z.number(),
    verses:       z.string(),         // e.g. "1-5" or "1, 4, 8"

    // ── Hero Section ──────────────────────────────────────────
    heroImage: z.object({
      src:        z.string(),
      alt:        z.string(),
      focalPoint: z.string().default('center'),  // CSS object-position
      credit:     z.string().optional(),
    }),
    accentColor: z.enum(['olive', 'slate', 'terra', 'gold']).default('gold'),

    // ── Scripture Focus Block ─────────────────────────────────
    scriptureBlock: z.object({
      translation:  z.string().default('ESV'),    // Bible version
      reference:    z.string(),                   // e.g. "John 15:1–5"
      verses:       z.array(VerseSchema),
      keyVerse:     z.string().optional(),        // The one to highlight
    }),

    // ── Context Tabs ─────────────────────────────────────────
    historicalContext: z.object({
      heading:    z.string().default('Historical Context'),
      period:     z.string(),    // e.g. "c. AD 85–90"
      location:   z.string(),
      body:       z.string(),    // Markdown prose
      timeline:   z.array(z.object({
        year:  z.string(),
        event: z.string(),
      })).optional(),
    }),

    languageInsights: z.object({
      heading:    z.string().default('Language & Word Study'),
      language:   z.enum(['Greek', 'Hebrew', 'Aramaic']),
      body:       z.string().optional(),
      words:      z.array(HebrewGreekWordSchema),
    }),

    modernApplication: z.object({
      heading:    z.string().default('Modern Application'),
      intro:      z.string().optional(),
      points:     z.array(ApplicationPointSchema),
    }),

    // ── Photo Breaks (between body sections) ─────────────────
    photoBreaks: z.array(PhotoBreakSchema).optional(),

    // ── Sermon Blueprint ─────────────────────────────────────
    sermonBlueprint: z.object({
      title:       z.string(),
      bigIdea:     z.string(),   // The one-sentence "Big Idea"
      points:      z.array(SermonPointSchema),
      closingCall: z.string(),   // The takeaway/challenge
      suggestedHymns: z.array(z.string()).optional(),
    }),

    // ── Cross-References ─────────────────────────────────────
    crossReferences: z.array(z.object({
      ref:   z.string(),
      note:  z.string().optional(),
    })).optional(),

    // ── SEO ───────────────────────────────────────────────────
    seoTitle:       z.string().optional(),
    seoDescription: z.string().optional(),
    ogImage:        z.string().optional(),   // Override hero for social
  }),
});

export const collections = { studies };
