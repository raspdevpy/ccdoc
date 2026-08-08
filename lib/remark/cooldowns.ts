import path from 'node:path';
import type { Root, RootContent, PhrasingContent } from 'mdast';
import cooldowns from '../../data/cooldowns.json';

type Cooldown = {
  time: number;
  per: string;
  scope: string;
  hardCooldown?: boolean;
};

const table = cooldowns as Record<string, Cooldown>;

function formatDuration(ms: number): string {
  if (ms < 1) return `${(ms * 1000).toFixed(ms >= 0.1 ? 0 : 1)} μs`;
  if (ms < 1000) return `${ms} ms`;

  const units: [string, number][] = [
    ['day', 86400000],
    ['hour', 3600000],
    ['minute', 60000],
    ['second', 1000],
  ];

  const parts: string[] = [];
  let rest = ms;
  for (const [name, value] of units) {
    const amount = Math.floor(rest / value);
    if (!amount) continue;
    parts.push(`${amount} ${name}${amount !== 1 ? 's' : ''}`);
    rest %= value;
    if (parts.length === 2) break;
  }
  return parts.join(' ');
}

const text = (value: string): PhrasingContent => ({ type: 'text', value });
const bullet = (label: string, ...rest: PhrasingContent[]): RootContent =>
  ({
    type: 'listItem',
    spread: false,
    children: [
      {
        type: 'paragraph',
        children: [{ type: 'strong', children: [text(label)] }, text(' '), ...rest],
      },
    ],
  }) as RootContent;

/**
 * Port of the VuePress `cooldownAddition` replacer: appends a generated
 * "Function Cooldown" section to any function page listed in
 * `data/cooldowns.json`.
 */
export function remarkCooldowns() {
  return (tree: Root, file: { path?: string }) => {
    if (!file.path) return;

    const fn = '$' + path.basename(file.path).replace(/\.mdx?$/, '');
    const cooldown = table[fn.toLowerCase()];
    if (!cooldown) return;

    tree.children.push(
      { type: 'heading', depth: 2, children: [text('Function Cooldown')] },
      {
        type: 'paragraph',
        children: [
          text('This function has built-in cooldown. Why? Read more about cooldowns '),
          {
            type: 'link',
            url: '/Other/ratelimits',
            children: [text('here')],
          },
          text('.'),
        ],
      },
      {
        type: 'list',
        ordered: false,
        spread: false,
        children: [
          bullet('Cooldown:', text(formatDuration(cooldown.time))),
          bullet('Tracked By:', text(cooldown.per)),
          bullet('Type:', { type: 'inlineCode', value: cooldown.scope }),
        ],
      } as RootContent,
      {
        type: 'paragraph',
        children: [
          text('Functions with the same type share cooldowns based on the same '),
          { type: 'inlineCode', value: 'Tracked By' },
          text(' value.'),
        ],
      },
    );

    if (cooldown.hardCooldown) {
      tree.children.push({
        type: 'mdxJsxFlowElement',
        name: 'Callout',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'type', value: 'warn' },
          { type: 'mdxJsxAttribute', name: 'title', value: 'Warning' },
        ],
        children: [
          {
            type: 'paragraph',
            children: [text('This cooldown cannot be bypassed by Tier 3+ bots.')],
          },
        ],
      } as unknown as RootContent);
    }
  };
}
