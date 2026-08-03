import type { ReactNode } from 'react';

type BadgeType = 'tip' | 'info' | 'warning' | 'danger';

const styles: Record<BadgeType, string> = {
  tip: 'bg-emerald-500/12 text-emerald-700 ring-emerald-500/25 dark:text-emerald-300',
  info: 'bg-sky-500/12 text-sky-700 ring-sky-500/25 dark:text-sky-300',
  warning: 'bg-amber-500/12 text-amber-700 ring-amber-500/25 dark:text-amber-300',
  danger: 'bg-rose-500/12 text-rose-700 ring-rose-500/25 dark:text-rose-300',
};

/**
 * Drop-in replacement for the VuePress `<Badge />`, kept prop-compatible so the
 * ~1000 existing usages in content did not need rewriting.
 */
export function Badge({
  type = 'tip',
  text,
  vertical = 'middle',
  children,
}: {
  type?: BadgeType;
  text?: string;
  vertical?: 'top' | 'middle' | 'bottom';
  children?: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${styles[type] ?? styles.tip}`}
      style={{ verticalAlign: vertical }}
    >
      {text ?? children}
    </span>
  );
}
