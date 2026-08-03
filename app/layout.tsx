import { Inter } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { Provider } from '@/components/provider';
import { appDescription, appName, siteUrl, socialImage } from '@/lib/shared';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    // Matches the old VuePress `dynamic-meta-plugin` output.
    template: `%s | ${appName}`,
    default: `${appName} Documentation`,
  },
  description: appDescription,
  icons: {
    icon: socialImage,
  },
  openGraph: {
    description: appDescription,
    images: socialImage,
  },
  twitter: {
    description: appDescription,
    images: socialImage,
  },
};

export const viewport: Viewport = {
  themeColor: '#74b0f7',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
