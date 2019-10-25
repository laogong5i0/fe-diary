module.exports = {
  themeConfig: {
    sidebarDepth: 2,
    sidebar: 'auto',
    navbar: true,
    displayAllHeaders: true,
    search: true, // 是否使用搜索组件
    searchMaxSuggestions: 10, // 搜索匹配数量
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vue', link: '/vue/' },
      { text: 'webpack', link: '/webpack/' }, // target:'_blank' },
      { text: 'react', link: '/react' },
      { text: 'rollup', link: '/rollup' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: {
      '/webpack/': [
        '', 
        'js-module'
      ],
      '/vue/': [
        '',
        'ttk-vue'
      ]
      //   {
      //     title: 'Group 2',
      //     children: [ /* ... */ ]
      //   }
    }
  }
}