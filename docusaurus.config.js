// docusaurus.config.js
module.exports = {
  title: 'Boletim VendaAI',
  tagline: 'Documentação oficial',
  favicon: 'img/favicon.ico',

  // Configurações para desenvolvimento local
  url: 'http://localhost:3000',
  baseUrl: '/',

  organizationName: 'vendaai',
  projectName: 'vendaai-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'VendaAI',
      logo: {
        alt: 'Logo VendaAI',
        src: 'img/logo.png',
        srcDark: 'img/logo.png', // Caso queira uma versão diferente para dark mode
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Início',
        },
        {
          to: '/boletim-v1.0',
          label: 'Versão 1.0',
          position: 'left',
        },
        {
          to: '/boletim-v2.0',
          label: 'Versão 2.0',
          position: 'left',
        },
        {
          to: '/sugestoes',
          label: 'Sugestões',
          position: 'left',
        },
      ],
      style: 'dark', // Cor da navbar (dark/primary)
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} VendaAI, Inc.`,
    },
  },
};