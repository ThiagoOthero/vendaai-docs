import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'b2d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'dba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c95'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '930'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '495'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '882'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '20f'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'dbb'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'b09'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/boletim-v1.0',
        component: ComponentCreator('/boletim-v1.0', 'c8b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/boletim-v2.0',
        component: ComponentCreator('/boletim-v2.0', '271'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/sugestoes',
        component: ComponentCreator('/sugestoes', 'abc'),
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
