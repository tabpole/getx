export default {
    title: 'Getx',
    description: 'Getx Documentation',
    base : '/getx/',
    lastUpdated: true,
    lang: 'en-US',
    cleanUrls: true,

    themeConfig: {
      siteTitle: 'Getx',
      logo : '/logo.png',

      // algolia: {
      //   appId: '9O9QAU72UI',
      //   apiKey: '03fb7c8b14ef1a61c79b3ae737f2f4e0',
      //   indexName: 'ker'
      // },

      editLink: {
        pattern: 'https://github.com/tabpole/getx/tree/main/docs/:path',
        text: 'Edit this page on GitHub'
      },

      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        { text: 'Documentation', link: 'getting_started/overview.md' },
        { text: 'Support', link: 'https://www.buymeacoffee.com/alpondith'},
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/jonataslaw/getx' },
      ],

      sidebar: [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Overview', link: 'getting_started/overview.md' },
            { text: 'About', link: 'getting_started/about.md' },
            { text: 'Why Getx', link: 'getting_started/why_getx.md' },
            { text: 'Install', link: 'getting_started/install.md' },
            { text: 'Counter App', link: 'getting_started/counter_app.md' },

          ],
        },
        
        {
          text: 'Resources',
          collapsed: true,
          items: [
            { text: 'Playlists', link: 'resources/playlist.md' },
            { text: 'Tools', link: 'resources/tool.md' },
          ],
        },
      ],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023 @tabpole'
      }
    },
  }