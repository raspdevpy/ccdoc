'use client';

import type { ComponentProps, ElementType, ReactNode } from 'react';
import React from 'react';
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
 * React counterpart. Skyra is the maintained successor.
 */

function withSiteTheme(Component: any) {
  return function Themed(
    props: ComponentProps<any> & { lightTheme?: boolean }
  ) {
    const { resolvedTheme } = useTheme();
    const Rendered = Component as ElementType;

    return (
      <Rendered
        lightTheme={resolvedTheme === 'light'}
        {...props}
      />
    );
  };
}

export const DiscordMessages = withSiteTheme(RawMessages);
export const DiscordMessage = withSiteTheme(RawMessage);

/**
 * Legacy DiscordEmbed.
 *
 * Existing syntax continues to work:
 *
 * <DiscordEmbed slot="embeds" color="#0F52BA">
 *   <DiscordEmbedDescription>
 *     You are awesome
 *   </DiscordEmbedDescription>
 * </DiscordEmbed>
 *
 * New simplified syntax also works:
 *
 * <DiscordEmbed>
 *   You are awesome
 * </DiscordEmbed>
 */
type DiscordEmbedProps = Omit<
  ComponentProps<typeof RawEmbed>,
  'children'
> & {
  children?: ReactNode;
};

export function DiscordEmbed({
  children,
  ...props
}: DiscordEmbedProps) {
  const { resolvedTheme } = useTheme();

  const childArray = React.Children.toArray(children);

  // Empty embed: preserve it as-is.
  if (childArray.length === 0) {
    return (
      <RawEmbed
        lightTheme={resolvedTheme === 'light'}
        {...props}
      />
    );
  }

  const child = childArray.length === 1
    ? childArray[0]
    : null;

  const isParagraph =
    React.isValidElement(child) &&
    child.type === 'p';

  const description = isParagraph
    ? (child.props as { children?: ReactNode }).children
    : children;

  const isPlainContent =
    isParagraph ||
    typeof description === 'string' ||
    typeof description === 'number';

  return (
    <RawEmbed
      lightTheme={resolvedTheme === 'light'}
      {...props}
    >
      {isPlainContent ? (
        <DiscordEmbedDescription slot="description">
          {description}
        </DiscordEmbedDescription>
      ) : (
        children
      )}
    </RawEmbed>
  );
}

export const DiscordEmbedField = withSiteTheme(RawEmbedField);
export const DiscordMention = withSiteTheme(RawMention);
export const DiscordReaction = withSiteTheme(RawReaction);

// These have no `lightTheme` of their own — they inherit from their parent.
export {
  DiscordActionRow,
  DiscordButton,
  DiscordEmbedDescription,
  DiscordEmbedFields,
  DiscordEmbedFooter,
  DiscordReactions,
};

/**
 * Simplified Discord message components.
 *
 */

type SimpleMessageProps = {
  children?: ReactNode;
};

export function DiscordMessageUser({
  children,
}: SimpleMessageProps) {
  const lightTheme = useTheme().resolvedTheme === 'light';
  return (
    <RawMessage lightTheme={lightTheme} roleColor="#ffcc9a" author="Member">
      {children}
    </RawMessage>
  );
}

export function DiscordMessageBot({
  children,
}: SimpleMessageProps) {
  const lightTheme = useTheme().resolvedTheme === 'light';
  
  return (
    <RawMessage
      lightTheme={lightTheme}
      author="Custom Command"
      bot
      roleColor="#0099ff"
      avatar="/bot-profile.png"
    >
      {children}
      
    </RawMessage>
  );
}

/**
 * `DiscordMarkdown` compatibility wrapper.
 */
export function DiscordMarkdown({
  children,
}: {
  children?: ReactNode;
}) {
  return children;
}
