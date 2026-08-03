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
        text: 'Invite the bot to your server',
        url: 'https://ccommandbot.com/add',
        external: true,
      },
      {
        text: 'Join The Support Server',
        url: 'https://ccommandbot.com/join',
        external: true,
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
