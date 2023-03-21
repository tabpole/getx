export default {
    title: 'Getx Handbook',
    description: 'Getx Handbook',
    base : '/getx/',
    lastUpdated: true,
    lang: 'en-US',
    cleanUrls: true,

    themeConfig: {
      siteTitle: 'Getx Handbook',
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
        { text: 'Documentation', link: 'getting_started/overview.md' },
        { text: 'About', link: 'https://tabpole.github.io' },
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
          text: 'Routing',
          collapsed: true,
          items: [
            { text: 'Simple', link: 'routing/simple.md' },
            { text: 'Named', link: 'routing/named.md' },
            { text: 'Nested', link: 'routing/nested.md' },
            { text: 'Tools', link: 'routing/tools.md' },
          ],
        },
        {
          text: 'State Management',
          collapsed: true,
          items: [
            { text: 'About', link: 'state_management/about.md' },
            { text: 'Reactive State Manager', link: 'state_management/reactive.md' },
            { text: 'Simple State Manager', link: 'state_management/simple.md' },
            { text: 'Mixing two state', link: 'state_management/mixing_state.md' },
            { text: 'comparison', link: 'state_management/comparison.md' },
          ],
        },
        {
          text: 'Dependency Manager',
          collapsed: true,
          items: [
            { text: 'Instancing methods', link: 'dependency_manager/instancing_method.md' },
            { text: 'Binding', link: 'dependency_manager/binding.md' },
          ],
        },
        {
          text: 'Utils',
          collapsed: true,
          items: [
            { text: 'Translation', link: 'utils/translation.md' },
            { text: 'Theme', link: 'utils/theme.md' },
            { text: 'GetConnect', link: 'utils/get_connect.md' },
            { text: 'Middleware', link: 'utils/middleware.md' },
            { text: 'Service', link: 'utils/service.md' },
            { text: 'Advance API', link: 'utils/advance_api.md' },
            { text: 'Tips', link: 'utils/tips.md' },
          ],
        },
        {
          text: 'Testing',
          collapsed: true,
          items: [
            { text: 'Test', link: 'testing/test.md' },
          ],
        },
        {
          text: 'Resources',
          collapsed: true,
          items: [
            { text: 'Playlists', link: 'resources/playlist.md' },
            { text: 'Tools', link: 'resources/tool.md' },
            { text: 'Community', link: '' },
          ],
        },
        {
          text: 'Others',
          collapsed: true,
          items: [
            { text: 'Breaking Changes', link: 'others/breaking_change.md' },
          ],
        },
      ],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023 by tabpole.github.io'
      }
    },
  }