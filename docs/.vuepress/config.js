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
      { text: 'react', link: '/react/' },
      { text: 'rollup', link: '/rollup/' },
      { text: 'babel', link: '/babel/' },
      {
        text: '维护的框架',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'vue', link: '/framwork/vue/' }
        ]
      }
    ],
    sidebar: {
      '/vue/':[
        ''
      ],
      '/react/':[
        '',
        'router'
      ],
      '/babel/':[
        ''
      ],
      '/rollup/':[
        ''
      ],
      '/webpack/': [
        '', 
        'js-module'
      ],
      '/framwork\/vue/': [
        '',
        'ttk-vue'
      ]
    }
  }
}