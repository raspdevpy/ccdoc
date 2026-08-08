import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const variants = {
  primary: 'bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80',
  outline: 'border hover:bg-fd-accent hover:text-fd-accent-foreground',
  ghost: 'hover:bg-fd-accent hover:text-fd-accent-foreground',
  secondary:
    'border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground',
} as const;

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: variants,
      color: variants,
      size: {
        sm: 'gap-1.5 px-2.5 py-1.5 text-xs [&_svg]:size-3.5',
        md: 'px-3 py-2 text-sm [&_svg]:size-4',
        icon: 'p-1.5 [&_svg]:size-5',
        'icon-sm': 'p-1.5 [&_svg]:size-4.5',
        'icon-xs': 'p-1 [&_svg]:size-4',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'sm',
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    icon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    link?: string;
  };

export const Button = React.forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      color,
      size,
      asChild = false,
      icon,
      leftIcon,
      rightIcon,
      children,
      link,
      ...props
    },
    ref,
  ) => {
    const startIcon = icon || leftIcon;
    const classes = buttonVariants({ color, size, className });

    if (asChild) {
      return (
        <Slot className={classes} ref={ref} {...props}>
          {children}
        </Slot>
      );
    }

    if (link) {
      const isExternal = link.startsWith('http://') || link.startsWith('https://');

      return (
        <a
          href={link}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer' : undefined}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {startIcon}
          {children}
          {rightIcon}
        </a>
      );
    }
    return (
      <button
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {startIcon}
        {children}
        {rightIcon}
      </button>
    );
  },
);

Button.displayName = 'Button';