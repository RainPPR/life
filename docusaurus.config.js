import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'RainPPR\'s Life Blog',
  tagline: '每一个不曾起舞的日子\n都是对生命的辜负',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: process.env.PAGES_ORIGIN || 'https://docusaurus.io/',
  baseUrl: process.env.PAGES_BASE_PATH || '/',

  organizationName: 'RainPPR',
  projectName: 'life',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/RainPPR/RainPPR/blob/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/RainPPR/RainPPR/blob/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/social_card.jpg',
      navbar: {
        title: 'RainPPR\'s Life Blog',
        logo: {
          alt: 'Docusaurus Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: '/blog',
            position: 'left',
            label: 'Blog',
          },
          {
            href: 'https://github.com/RainPPR/life',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
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
            title: 'About',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/RainPPR',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@rainppr',
              },
              {
                label: 'X',
                href: 'https://x.com/rainppr2008',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/RainPPR/life',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RainPPR. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
