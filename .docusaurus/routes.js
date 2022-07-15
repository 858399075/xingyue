
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/blog',
    component: ComponentCreator('/blog/blog','fdc'),
    exact: true
  },
  {
    path: '/blog/blog/面经',
    component: ComponentCreator('/blog/blog/面经','7a2'),
    exact: true
  },
  {
    path: '/blog/blog/archive',
    component: ComponentCreator('/blog/blog/archive','164'),
    exact: true
  },
  {
    path: '/blog/search',
    component: ComponentCreator('/blog/search','fe8'),
    exact: true
  },
  {
    path: '/blog/docs',
    component: ComponentCreator('/blog/docs','65d'),
    routes: [
      {
        path: '/blog/docs/编程题',
        component: ComponentCreator('/blog/docs/编程题','efa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/编译原理',
        component: ComponentCreator('/blog/docs/编译原理','54c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/错误监控',
        component: ComponentCreator('/blog/docs/错误监控','4ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/代码段记录',
        component: ComponentCreator('/blog/docs/代码段记录','be3'),
        exact: true
      },
      {
        path: '/blog/docs/第三方库',
        component: ComponentCreator('/blog/docs/第三方库','ae5'),
        exact: true
      },
      {
        path: '/blog/docs/计算机网络',
        component: ComponentCreator('/blog/docs/计算机网络','641'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/面试题',
        component: ComponentCreator('/blog/docs/面试题','d76'),
        exact: true
      },
      {
        path: '/blog/docs/排序',
        component: ComponentCreator('/blog/docs/排序','4b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/其它',
        component: ComponentCreator('/blog/docs/其它','2e2'),
        exact: true
      },
      {
        path: '/blog/docs/前端安全',
        component: ComponentCreator('/blog/docs/前端安全','bd3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/设计模式',
        component: ComponentCreator('/blog/docs/设计模式','5f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/数据结构',
        component: ComponentCreator('/blog/docs/数据结构','ee6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/网站优化',
        component: ComponentCreator('/blog/docs/网站优化','2ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/写在前面',
        component: ComponentCreator('/blog/docs/写在前面','835'),
        exact: true
      },
      {
        path: '/blog/docs/akara的考验',
        component: ComponentCreator('/blog/docs/akara的考验','8ff'),
        exact: true
      },
      {
        path: '/blog/docs/browser',
        component: ComponentCreator('/blog/docs/browser','d66'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/css',
        component: ComponentCreator('/blog/docs/css','41e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/docker',
        component: ComponentCreator('/blog/docs/docker','977'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/git',
        component: ComponentCreator('/blog/docs/git','e26'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/HTML',
        component: ComponentCreator('/blog/docs/HTML','c40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/infra/前端工程化',
        component: ComponentCreator('/blog/docs/infra/前端工程化','752'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/infra/Babel',
        component: ComponentCreator('/blog/docs/infra/Babel','0aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/infra/CI',
        component: ComponentCreator('/blog/docs/infra/CI','3e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/infra/ESLint-and-Prettier',
        component: ComponentCreator('/blog/docs/infra/ESLint-and-Prettier','877'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/infra/PostCSS',
        component: ComponentCreator('/blog/docs/infra/PostCSS','6d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/infra/Prettier',
        component: ComponentCreator('/blog/docs/infra/Prettier','a30'),
        exact: true
      },
      {
        path: '/blog/docs/infra/Rollup',
        component: ComponentCreator('/blog/docs/infra/Rollup','c97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/infra/Test',
        component: ComponentCreator('/blog/docs/infra/Test','b09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/infra/Webpack',
        component: ComponentCreator('/blog/docs/infra/Webpack','773'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/intro',
        component: ComponentCreator('/blog/docs/intro','d2a'),
        exact: true
      },
      {
        path: '/blog/docs/javascript/',
        component: ComponentCreator('/blog/docs/javascript/','538'),
        exact: true
      },
      {
        path: '/blog/docs/javascript/对象',
        component: ComponentCreator('/blog/docs/javascript/对象','eb0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/函数',
        component: ComponentCreator('/blog/docs/javascript/函数','6c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/事件',
        component: ComponentCreator('/blog/docs/javascript/事件','3ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/数组',
        component: ComponentCreator('/blog/docs/javascript/数组','9a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/正则',
        component: ComponentCreator('/blog/docs/javascript/正则','994'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/装饰器',
        component: ComponentCreator('/blog/docs/javascript/装饰器','3b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/AJAX',
        component: ComponentCreator('/blog/docs/javascript/AJAX','2db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/basic',
        component: ComponentCreator('/blog/docs/javascript/basic','225'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/BOM',
        component: ComponentCreator('/blog/docs/javascript/BOM','2c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/Class',
        component: ComponentCreator('/blog/docs/javascript/Class','999'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/Date',
        component: ComponentCreator('/blog/docs/javascript/Date','420'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/DOM',
        component: ComponentCreator('/blog/docs/javascript/DOM','0b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/Fetch',
        component: ComponentCreator('/blog/docs/javascript/Fetch','671'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/Generator',
        component: ComponentCreator('/blog/docs/javascript/Generator','326'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/Graphql',
        component: ComponentCreator('/blog/docs/javascript/Graphql','00e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/Promise',
        component: ComponentCreator('/blog/docs/javascript/Promise','0a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/Proxy',
        component: ComponentCreator('/blog/docs/javascript/Proxy','9a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/Reflect',
        component: ComponentCreator('/blog/docs/javascript/Reflect','261'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/javascript/Set-Map',
        component: ComponentCreator('/blog/docs/javascript/Set-Map','4ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/koa',
        component: ComponentCreator('/blog/docs/koa','d89'),
        exact: true
      },
      {
        path: '/blog/docs/linux',
        component: ComponentCreator('/blog/docs/linux','476'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/mongodb',
        component: ComponentCreator('/blog/docs/mongodb','dff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/mysql',
        component: ComponentCreator('/blog/docs/mysql','501'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/node/',
        component: ComponentCreator('/blog/docs/node/','97c'),
        exact: true
      },
      {
        path: '/blog/docs/node/build-in-modules',
        component: ComponentCreator('/blog/docs/node/build-in-modules','82b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/node/eventloop',
        component: ComponentCreator('/blog/docs/node/eventloop','a8f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/node/library',
        component: ComponentCreator('/blog/docs/node/library','4ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/node/module',
        component: ComponentCreator('/blog/docs/node/module','fd2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/node/npm',
        component: ComponentCreator('/blog/docs/node/npm','04a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/node/stream',
        component: ComponentCreator('/blog/docs/node/stream','e06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/others',
        component: ComponentCreator('/blog/docs/others','221'),
        exact: true
      },
      {
        path: '/blog/docs/php',
        component: ComponentCreator('/blog/docs/php','585'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/react-vs-vue',
        component: ComponentCreator('/blog/docs/react-vs-vue','db2'),
        exact: true
      },
      {
        path: '/blog/docs/react/',
        component: ComponentCreator('/blog/docs/react/','b0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/react/第三方库',
        component: ComponentCreator('/blog/docs/react/第三方库','0f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/react/基础',
        component: ComponentCreator('/blog/docs/react/基础','6cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/react/进阶',
        component: ComponentCreator('/blog/docs/react/进阶','cb3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/react/Hook',
        component: ComponentCreator('/blog/docs/react/Hook','2e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/react/types',
        component: ComponentCreator('/blog/docs/react/types','9e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/typescript/',
        component: ComponentCreator('/blog/docs/typescript/','50e'),
        exact: true
      },
      {
        path: '/blog/docs/typescript/版本更新日志.mdx',
        component: ComponentCreator('/blog/docs/typescript/版本更新日志.mdx','c64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/typescript/工具类型',
        component: ComponentCreator('/blog/docs/typescript/工具类型','6ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/typescript/类型操作.mdx',
        component: ComponentCreator('/blog/docs/typescript/类型操作.mdx','866'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/typescript/类型断言',
        component: ComponentCreator('/blog/docs/typescript/类型断言','eec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/typescript/类型守卫',
        component: ComponentCreator('/blog/docs/typescript/类型守卫','c39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/typescript/逆变与协变',
        component: ComponentCreator('/blog/docs/typescript/逆变与协变','251'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/typescript/声明合并',
        component: ComponentCreator('/blog/docs/typescript/声明合并','6dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/typescript/basic',
        component: ComponentCreator('/blog/docs/typescript/basic','7eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/typescript/config',
        component: ComponentCreator('/blog/docs/typescript/config','b38'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/typescript/declaration',
        component: ComponentCreator('/blog/docs/typescript/declaration','5aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/Untitled',
        component: ComponentCreator('/blog/docs/Untitled','1d8'),
        exact: true
      },
      {
        path: '/blog/docs/vue',
        component: ComponentCreator('/blog/docs/vue','8dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/webgl',
        component: ComponentCreator('/blog/docs/webgl','8b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blog/docs/websocket',
        component: ComponentCreator('/blog/docs/websocket','0c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/blog/',
    component: ComponentCreator('/blog/','f78'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
