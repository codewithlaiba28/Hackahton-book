import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';



const config: Config = {
  // ... existing config ...
  plugins: [
    "./src/plugins/proxy-plugin",
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'urdu',
        path: 'urdu',
        routeBasePath: 'urdu',
        sidebarPath: './sidebarsUrdu.ts',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'easy',
        path: 'personalization/easy',
        routeBasePath: 'personalization/easy',
        sidebarPath: './sidebars.ts',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'medium',
        path: 'personalization/medium',
        routeBasePath: 'personalization/medium',
        sidebarPath: './sidebars.ts',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'hard',
        path: 'personalization/hard',
        routeBasePath: 'personalization/hard',
        sidebarPath: './sidebars.ts',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'urdu_easy',
        path: 'personalization/urdu-easy',
        routeBasePath: 'personalization/urdu/easy',
        sidebarPath: './sidebarsUrdu.ts',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'urdu_medium',
        path: 'personalization/urdu-medium',
        routeBasePath: 'personalization/urdu/medium',
        sidebarPath: './sidebarsUrdu.ts',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'urdu_hard',
        path: 'personalization/urdu-hard',
        routeBasePath: 'personalization/urdu/hard',
        sidebarPath: './sidebarsUrdu.ts',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
  ],

  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Master the art of building intelligent physical agents from foundations to deployment',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Read Book',
        },

        {
          type: 'custom-NavbarPersonalization',
          position: 'right',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [

            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPCSSLXVDkw/0P22ok0E17mrosLUnqseQF71/J5k/z',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;