/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Google Season of Docs',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/writing-hand_270d.png',
  projectName: 'Google-Season-of-Docs', 
  themeConfig: {
    navbar: {
      title: 'Google Season of Docs 2021',
      logo: {
        alt: 'Google Season of Docs Logo',
        src: 'https://developers.google.com/season-of-docs/images/logo/SeasonofDocs_Icon_Grey_300ppi.png',
        srcDark: 'https://developers.google.com/season-of-docs/images/logo/SeasonofDocs_Icon_WhiteYellow_300ppi.png'
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tracker',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/HarshCasper/Google-Season-of-Docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: "Google Season of Docs Logo",
        src: "https://developers.google.com/season-of-docs/images/logo/SeasonofDocs_Icon_WhiteYellow_300ppi.png",
        href: "https://developers.google.com/season-of-docs",
      },
      links: [
        {
          title: 'Project Tracker',
          items: [
            {
              label: 'Tracker',
              to: '/',
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
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Harsh Bardhan Mishra`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/HarshCasper/Google-Season-of-Docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/HarshCasper/Google-Season-of-Docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
