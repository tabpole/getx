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
          collapsed: true,
          items: [
            { text: 'Overview', link: 'getting_started/overview.md' },
            { text: 'Installation', link: 'getting_started/installation.md' },
            { text: 'Uninstall', link: 'getting_started/uninstall.md' },
          ],
        },
        {
          text: 'Commands',
          collapsed: false,
          items: [
            { text: 'Project', link: 'commands/project.md' },
            { text: 'Model', link: 'commands/model.md' },
            { text: 'View', link: 'commands/view.md' },
            { text: 'Controller', link: 'commands/controller.md' },
            { text: 'Page', link: 'commands/page.md' },
            { text: 'Screen', link: 'commands/screen.md' },
            { text: 'Locale', link: 'commands/locale.md' },
          ],
        },
        {
          text: 'Packages',
          collapsed: true,
          items: [
            { text: 'Install', link: 'packages/install.md' },
            { text: 'Update', link: 'packages/update.md' },
            { text: 'Remove', link: 'packages/remove.md' },
          ],
        },
        {
          text: 'Examples',
          collapsed: true,
          items: [
            {  text: 'Page', link: 'examples/page.md'},
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