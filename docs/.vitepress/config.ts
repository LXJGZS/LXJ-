import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh-CN',
  title: 'Markdown 教程',
  description: 'LXJ tEam Markdown 教程',

  themeConfig: {
    nav: [
      { text: '联系方式', link: '/联系方式' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: '准备环境', link: '/准备环境' },
          { text: '介绍', link: '/介绍' },
          // ...
        ],
      },
    ],
  },
});
