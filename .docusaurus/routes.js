import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/vendaai-docs/__docusaurus/debug',
    component: ComponentCreator('/vendaai-docs/__docusaurus/debug', '146'),
    exact: true
  },
  {
    path: '/vendaai-docs/__docusaurus/debug/config',
    component: ComponentCreator('/vendaai-docs/__docusaurus/debug/config', '2cc'),
    exact: true
  },
  {
    path: '/vendaai-docs/__docusaurus/debug/content',
    component: ComponentCreator('/vendaai-docs/__docusaurus/debug/content', 'e90'),
    exact: true
  },
  {
    path: '/vendaai-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/vendaai-docs/__docusaurus/debug/globalData', 'b86'),
    exact: true
  },
  {
    path: '/vendaai-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/vendaai-docs/__docusaurus/debug/metadata', '4f0'),
    exact: true
  },
  {
    path: '/vendaai-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/vendaai-docs/__docusaurus/debug/registry', '06c'),
    exact: true
  },
  {
    path: '/vendaai-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/vendaai-docs/__docusaurus/debug/routes', '343'),
    exact: true
  },
  {
    path: '/vendaai-docs/',
    component: ComponentCreator('/vendaai-docs/', '813'),
    routes: [
      {
        path: '/vendaai-docs/',
        component: ComponentCreator('/vendaai-docs/', '1ae'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/vendaai-docs/boletim-v1.0',
        component: ComponentCreator('/vendaai-docs/boletim-v1.0', 'e0f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/vendaai-docs/boletim-v2.0',
        component: ComponentCreator('/vendaai-docs/boletim-v2.0', 'cbe'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/vendaai-docs/sugestoes',
        component: ComponentCreator('/vendaai-docs/sugestoes', '368'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
