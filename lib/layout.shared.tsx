import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <img src="/favicon.ico" alt="" width={24} height={24} className="rounded" />
          {appName}
        </>
      ),
    },
    // Carried over from the old VuePress navbar.
    links: [
      {
        text: 'Dashboard',
        url: 'https://ccommandbot.com/dashboard',
        external: true,
      },
      {
        text: 'Discord',
        url: 'https://discord.gg/ZFQNZA4Ekz',
        external: true,
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
