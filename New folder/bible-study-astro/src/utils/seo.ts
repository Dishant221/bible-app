/**
 * SEO utility functions
 */

import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '../constants/config';

export interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'blog';
  author?: string;
  publishDate?: Date;
  updateDate?: Date;
}

export function generateSEOTags(props: SEOProps) {
  const {
    title,
    description = SITE_DESCRIPTION,
    image = `${SITE_URL}/og-image.png`,
    url = SITE_URL,
    type = 'website',
  } = props;

  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    image,
    url,
    type,
    socialMeta: {
      'og:title': fullTitle,
      'og:description': description,
      'og:image': image,
      'og:url': url,
      'og:type': type,
      'twitter:card': 'summary_large_image',
      'twitter:title': fullTitle,
      'twitter:description': description,
      'twitter:image': image,
    },
  };
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function generateStructuredData(data: Record<string, any>) {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}
