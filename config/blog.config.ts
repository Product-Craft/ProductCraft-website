import type { Post } from 'contentlayer/generated';

export const CategoryColors: Record<
  NonNullable<Post['category']>,
  'mint' | 'violet' | 'blue' | 'sun'
> = {
  Engineering: 'mint',
  Product: 'violet',
  "Generative AI": 'blue',
  Careers: 'sun',
} as const;

export const favorites: Post['slug'][] = [
  'how-to-build-a-text-editor-like-notion',
  'adopting-a-no-code-mindset',
  'why-open-source-projects-are-your-best-marketing',
];
