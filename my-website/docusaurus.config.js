// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sukratte2.0-Hilfe', // Angepasst
  tagline: 'Die offizielle Hilfe für Sukratte2.0', // Optional: Angepasst
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://Sukram2008.github.io', // Angepasst: Deine GitHub Pages Haupt-URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/sukratte2.0-hilfe/', // KORRIGIERT: Muss der Projektname mit Slashes sein

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sukram2008', // Dein GitHub org/user name.
  projectName: 'sukratte2.0-hilfe', // Dein Repo name.
  deploymentBranch: 'main', // Hinzugefügt: Sage Docusaurus, dass es auf den 'main'-Branch pushen soll

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de', // Optional: Auf Deutsch geändert
    locales: ['de', 'en'], // Optional: Deutsch und Englisch
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Bitte dies auf dein Repo ändern.
          // Entferne dies, um die "edit this page" Links zu entfernen.
          editUrl:
            'https://github.com/Sukram2008/sukratte2.0-hilfe/tree/main/docs/', // KORRIGIERT: Dein Repo-Pfad
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Bitte dies auf dein Repo ändern.
          // Entferne dies, um die "edit this page" Links zu entfernen.
          editUrl:
            'https://github.com/Sukram2008/sukratte2.0-hilfe/tree/main/blog/', // KORRIGIERT: Dein Repo-Pfad
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg', // Behalte dies, oder ersetze es durch dein eigenes Bild
      navbar: {
        title: 'Sukratte2.0-Hilfe', // Angepasst
        logo: {
          alt: 'Sukratte2.0 Logo', // Angepasst
          src: 'img/logo.svg', // Behalte dies, oder ersetze es durch dein eigenes Logo
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Befehle', // Angepasst
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Sukram2008/sukratte2.0-hilfe', // KORRIGIERT: Dein GitHub Repo Link
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Befehle Übersicht', // Angepasst
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus', // Du könntest hier deinen eigenen Discord-Link einfügen
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Sukram2008/sukratte2.0-hilfe', // KORRIGIERT: Dein GitHub Repo Link
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sukratte2.0. Built with Docusaurus.`, // Angepasst
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;