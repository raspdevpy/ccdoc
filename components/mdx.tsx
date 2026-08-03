import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import type { MDXComponents } from 'mdx/types';
import type { ComponentProps, ComponentType } from 'react';
import { Badge } from '@/components/badge';
import { Arg } from '@/components/arg';
import * as Discord from '@/components/discord';

// Fumadocs types this against next/image's props, whose `src` is a union that
// no longer overlaps with the plain `<img>` props MDX hands us. The runtime
// component is happy with either.
const NextImage = defaultMdxComponents.img as ComponentType<ComponentProps<'img'>>;

/**
 * Fumadocs renders markdown images with next/image, which needs intrinsic
 * dimensions. `remarkImage` supplies them for local files by rewriting the path
 * into a static import, but an external URL only gets sized by fetching it at
 * build time — which we deliberately don't do, because a lot of the linked
 * Discord CDN attachments are long dead (see `source.config.ts`). Those nodes
 * are therefore left as a plain string `src` with no width or height.
 *
 * next/image throws on the missing dimensions only when NODE_ENV isn't
 * production, so `next build` renders them while `next dev` returns a 500 for
 * every page that holds one — 70 pages here. Emit a plain <img> instead, which
 * is what the old VuePress site served for these anyway.
 */
function Image({ src, className, ...props }: ComponentProps<'img'>) {
  if (typeof src === 'string' && props.width === undefined) {
    return (
      <img
        src={src}
        loading="lazy"
        decoding="async"
        {...props}
        className={['rounded-lg', className].filter(Boolean).join(' ')}
      />
    );
  }

  return <NextImage src={src} className={className} {...props} />;
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    img: Image,
    Accordion,
    Accordions,
    Badge,
    Arg,
    ...Discord,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
