import type { Post } from 'contentlayer/generated';

export const CategoryColors: Record<
  NonNullable<Post['category']>,
  'mint' | 'violet' | 'blue' | 'sun' | 'gray'
> = {
  Engineering: 'mint',
  Product: 'violet',
  GenerativeAI: 'blue',
  Careers: 'sun',
} as const;

export const favorites: Post['slug'][] = [
  'how-to-build-a-text-editor-like-notion',
  'adopting-a-no-code-mindset',
  'why-open-source-projects-are-your-best-marketing',
];
