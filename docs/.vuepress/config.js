module.exports = {
  themeConfig: {
    head: [
      ['link', { rel: 'icon', href: 'http://test.aierp.cn:8089/vendor/img/standard/favicon.ico' }]
    ],
    title: "Foresee Front End",
    sidebarDepth: 2,
    sidebar: 'auto',
    navbar: true,
    displayAllHeaders: true,
    search: true, // 是否使用搜索组件
    searchMaxSuggestions: 10, // 搜索匹配数量
    nav: [
      { text: 'Home', link: '/' },
      { text: 'ttk', link: '/ttk/' },
      { text: '@ttk/vue', link: '/framwork/vue/' },
      { text: 'Vue', link: '/vue/' },
      { text: 'webpack', link: '/webpack/' }, // target:'_blank' },
      { text: 'react', link: '/react/' },
      { text: 'rollup', link: '/rollup/' },
      { text: 'babel', link: '/babel/' },
      // {
      //   text: '维护的框架',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'vue', link: '/framwork/vue/' }
      //   ]
      // }
    ],
    sidebar: {
      '/vue/': [
        ''
      ],
      '/ttk/': [
        ''
      ],
      '/framwork\/vue/': [
        '',
        'ttk-vue'
      ],
      '/react/': [
        '',
        'router'
      ],
      '/babel/': [
        ''
      ],
      '/rollup/': [
        ''
      ],
      '/webpack/': [
        '',
        'js-module'
      ]
      // '/framwork\/vue/': [
      //   '',
      //   'ttk-vue'
      // ]
    }
  }
}