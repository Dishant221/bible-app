/**
 * Site Configuration Constants
 */

export const SITE_NAME = 'Bible Study Hub';
export const SITE_DESCRIPTION = 'AI-Powered Bible Learning with Chrome Extension';
export const SITE_URL = 'https://biblestudyhub.com';
export const COMPANY_EMAIL = 'support@biblestudyhub.com';

/**
 * Navigation Links
 */
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
] as const;

/**
 * Footer Links
 */
export const FOOTER_LINKS = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Download', href: 'https://chrome.google.com/webstore', external: true },
    { label: 'Roadmap', href: '/roadmap' },
  ],
  Learn: [
    { label: 'Blog', href: '/blog' },
    { label: 'Study Guides', href: '/guides' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Resources', href: '/resources' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Contact', href: '/contact' },
    { label: 'Credits', href: '/credits' },
  ],
} as const;

/**
 * Social Links
 */
export const SOCIAL_LINKS = [
  { icon: '𝕏', label: 'Twitter', href: 'https://twitter.com/biblestudyhub' },
  { icon: 'f', label: 'Facebook', href: 'https://facebook.com/biblestudyhub' },
  { icon: 'in', label: 'LinkedIn', href: 'https://linkedin.com/company/biblestudyhub' },
  { icon: '▶', label: 'YouTube', href: 'https://youtube.com/@biblestudyhub' },
] as const;

/**
 * Chrome Extension Link
 */
export const CHROME_EXTENSION_URL = 'https://chrome.google.com/webstore';

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
  razorpay: 'https://api.razorpay.com/v1',
} as const;

/**
 * Feature List
 */
export const FEATURES = [
  {
    icon: '🤖',
    title: 'AI-Powered Insights',
    description: 'Get instant summaries, analysis, and context for any Bible passage',
  },
  {
    icon: '📚',
    title: 'Study Guides',
    description: 'Comprehensive guides for studying books of the Bible',
  },
  {
    icon: '💡',
    title: 'Deep Commentary',
    description: 'Access to theological insights and scholarly commentary',
  },
  {
    icon: '🔍',
    title: 'Cross-References',
    description: 'Find related passages and thematic connections',
  },
  {
    icon: '📝',
    title: 'Notes & Highlights',
    description: 'Save your thoughts and highlights while studying',
  },
  {
    icon: '🎯',
    title: 'Personalized Plans',
    description: 'Custom study plans tailored to your interests',
  },
] as const;

/**
 * Pricing Plans
 */
export const PRICING_PLANS = [
  {
    name: 'Free',
    price: 0,
    description: 'Get started with Bible study',
    features: [
      'Basic passage lookup',
      'Simple study plans',
      'Limited commentary access',
      'Community support',
    ],
    cta: { text: 'Get Started', href: 'https://chrome.google.com/webstore' },
  },
  {
    name: 'Pro',
    price: 4.99,
    description: 'Advanced study tools and features',
    highlighted: true,
    features: [
      'Everything in Free',
      'Advanced AI insights',
      'Full commentary access',
      'Custom study plans',
      'Priority support',
      'Offline access',
    ],
    cta: { text: 'Start Free Trial', href: '/pricing?plan=pro' },
  },
  {
    name: 'Premium',
    price: 9.99,
    description: 'Complete Bible study solution',
    features: [
      'Everything in Pro',
      'Exclusive master classes',
      'One-on-one coaching',
      'Advanced analytics',
      'Family plan (up to 5)',
      '24/7 phone support',
    ],
    cta: { text: 'Start Free Trial', href: '/pricing?plan=premium' },
  },
] as const;

/**
 * FAQ Questions
 */
export const FAQ = [
  {
    question: 'What is Bible Study Hub?',
    answer: 'Bible Study Hub is an AI-powered Chrome extension that provides deep insights, commentary, and study tools for Bible passages.',
  },
  {
    question: 'Is it really free?',
    answer: 'Yes! The basic version is completely free. We also offer Pro and Premium plans with advanced features.',
  },
  {
    question: 'Which Bible translations are supported?',
    answer: 'We support all major translations including KJV, NKJV, NIV, ESV, NASB, and many others.',
  },
  {
    question: 'Can I use it offline?',
    answer: 'The free version requires internet. Pro and Premium plans include offline access to your study materials.',
  },
  {
    question: 'How accurate is the AI commentary?',
    answer: 'Our AI is trained on scholarly sources and theological databases. We always encourage cross-referencing with other resources.',
  },
  {
    question: 'Can I export my notes?',
    answer: 'Yes! Pro and Premium users can export their notes and highlights in multiple formats.',
  },
] as const;

/**
 * Testimonials
 */
export const TESTIMONIALS = [
  {
    text: 'This tool completely transformed how I study Scripture. The AI insights are incredibly helpful and theologically sound.',
    author: 'Sarah Johnson',
    role: 'Bible Study Leader',
    rating: 5,
  },
  {
    text: 'Finally, a study tool that understands context and provides real theological depth. Highly recommended!',
    author: 'Pastor Michael',
    role: 'Church Pastor',
    rating: 5,
  },
  {
    text: 'The custom study plans help me stay focused and consistent in my Bible reading journey.',
    author: 'Emma Davis',
    role: 'Student',
    rating: 5,
  },
] as const;
