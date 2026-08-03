'use client';

import type { ComponentProps, ElementType, ReactNode } from 'react';
import { useTheme } from 'next-themes';
import {
  DiscordActionRow,
  DiscordButton,
  DiscordEmbed as RawEmbed,
  DiscordEmbedDescription,
  DiscordEmbedField as RawEmbedField,
  DiscordEmbedFields,
  DiscordEmbedFooter,
  DiscordMention as RawMention,
  DiscordMessage as RawMessage,
  DiscordMessages as RawMessages,
  DiscordReaction as RawReaction,
  DiscordReactions,
} from '@skyra/discord-components-react';

/**
 * Discord message mock-ups.
 *
 * The old site used `@discord-message-components/vue`, which has no maintained
 * React counterpart (its React twin was last published in 2022). `@skyra/*` is
 * the actively maintained successor and covers every component the docs use,
 * with one exception: `DiscordMarkdown`, shimmed below.
 *
 * These are Lit web components, so they render on the client only.
 */

/**
 * The old site kept these blocks in step with the site theme via CSS overrides.
 * Skyra renders into a shadow root, so external CSS can't reach it — the
 * supported route is the per-component `lightTheme` prop.
 */
function withSiteTheme<T extends ElementType>(Component: T) {
  return function Themed(props: ComponentProps<T> & { lightTheme?: boolean }) {
    const { resolvedTheme } = useTheme();
    const Rendered = Component as ElementType;
    return <Rendered lightTheme={resolvedTheme === 'light'} {...props} />;
  };
}

export const DiscordMessages = withSiteTheme(RawMessages);
export const DiscordMessage = withSiteTheme(RawMessage);
export const DiscordEmbed = withSiteTheme(RawEmbed);
export const DiscordEmbedField = withSiteTheme(RawEmbedField);
export const DiscordMention = withSiteTheme(RawMention);
export const DiscordReaction = withSiteTheme(RawReaction);

// these have no `lightTheme` of their own — they inherit from their parent
export {
  DiscordActionRow,
  DiscordButton,
  DiscordEmbedDescription,
  DiscordEmbedFields,
  DiscordEmbedFooter,
  DiscordReactions,
};

/**
 * `@skyra/*` dropped the `DiscordMarkdown` wrapper — message bodies handle
 * their own formatting now. Kept as a passthrough so existing content renders
 * unchanged.
 */
export function DiscordMarkdown({ children }: { children?: ReactNode }) {
  return <span>{children}</span>;
}
