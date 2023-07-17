import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import NextImage from 'next/image';
import Link from 'next/link';

import { CategoryColors } from '@/config/blog.config';
import { Label } from '@/components/Label';
import { Avatar } from '@/components/Avatar';
import { Tooltip } from '@/components/Tooltip';
import { CTA } from '@/components/CTA';

import { mdxComponents } from './_mdxComponents';

const getPostBySlug = (slug: string) => {
  const post = allPosts.find(post => post.slug === slug);
  if (!post) throw new Error(`Post not found for slug: ${slug}`);
  return post;
};

const Post = ({ params }: { params: { slug: string } }) => {
  const post = getPostBySlug(params.slug);
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <main className="px-container pb-24">
      <article className="relative mx-auto max-w-2xl pb-16 pt-6 md:pb-32 md:pt-12">
        <Tooltip.Root placement="top">
          <Tooltip.Trigger asChild>
            <Link
              href="/blog"
              role="button"
              aria-label="View all posts"
              className="a-reset hover:bg-white-200 absolute -left-16 top-[46px] hidden p-1 opacity-50 hover:bg-black-100 dark:hover:bg-black-900 md:block"
            >
              <span className="sr-only">View all posts</span>
              <ArrowLeft size={24} />
            </Link>
          </Tooltip.Trigger>
          <Tooltip.Content>View all posts</Tooltip.Content>
        </Tooltip.Root>
        <div className="md:mb-16">
          {post.category && (
            <Label
              color={CategoryColors[post.category]}
              className="inline-block"
            >
              {post.category}
            </Label>
          )}
          <h1 className="my-5 font-accent text-4xl font-bold md:text-5xl">
            {post.title}
          </h1>
          <p className="text-lg">{post.summary}</p>
          <div className="mt-8 flex items-center justify-start gap-6">
            <div className="flex items-center gap-2">
              <Avatar size={28} />
              <span className="text-sm font-medium opacity-75">
                Konstantin Münster
              </span>
            </div>
            <time dateTime={post.publishedAt} className="text-sm opacity-75">
              {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
            </time>
          </div>
          {post.cover && (
            <div className="my-8">
              <NextImage
                src={post.cover.src}
                alt={post.cover.alt}
                width={1200}
                height={800}
                className="mb-2 rounded-lg"
              />
              {post.cover.caption?.html && (
                <div
                  className="text-center text-xs opacity-50"
                  dangerouslySetInnerHTML={{ __html: post.cover.caption.html }}
                />
              )}
            </div>
          )}
        </div>
        <div className="prose prose-lg prose-violet dark:prose-invert prose-a:no-underline">
          <MDXContent components={mdxComponents} />
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-start gap-2">
          {post.tags?.map((tag, i) => {
            return (
              <Label
                key={i}
                color="grey"
                className="select-none transition-all hover:ring-2 hover:ring-violet/50 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-offset-black"
              >
                {tag}
              </Label>
            );
          })}
        </div>
      </article>
      <div className="mx-auto max-w-container">
        <CTA variant="sun" />
      </div>
    </main>
  );
};

/** EXPORTS */

export const generateStaticParams = async () => {
  return allPosts.map(post => ({ slug: post.slug }));
};

type GenerateMetadataParams = { params: { slug: string } };
export const generateMetadata = (props: GenerateMetadataParams): Metadata => {
  const post = getPostBySlug(props.params.slug);
  return { title: post.title, description: post.summary };
};

export default Post;
