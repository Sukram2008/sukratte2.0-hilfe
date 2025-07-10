/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation.
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Discord Befehle',
      link: {
        type: 'generated-index',
        title: 'Alle Discord Befehle',
        description: 'Hier findest du eine Übersicht über alle Discord Befehle und deren Unterkategorien.',
        slug: '/category/discord-befehle',
      },
      collapsed: false,
      items: [
        // --- KATEGORIE: Admin Tools ---
        {
          type: 'category',
          label: 'Admin Tools',
          link: {
            type: 'generated-index',
            title: 'Admin Tools Übersicht',
            description: 'Verwalte deinen Server mit diesen Admin Tools.',
            slug: '/category/discord-befehle/admin-tools',
          },
          items: [
            {
              type: 'category',
              label: 'Admin-Befehle',
              link: {
                type: 'generated-index',
                title: 'Spezifische Admin-Befehle',
                description: 'Befehle zur Serververwaltung.',
                slug: '/category/discord-befehle/admin-tools/admin-befehle',
              },
              items: [
                'discord-befehle/Admin Tools/Admin-Befehle/AdminMovechannel',
                'discord-befehle/Admin Tools/Admin-Befehle/AdminMoverole',
                'discord-befehle/Admin Tools/Admin-Befehle/AdminSetcategory',
              ],
            },
            {
              type: 'category',
              label: 'Rollen-Befehle',
              link: {
                type: 'generated-index',
                title: 'Befehle zur Rollenverwaltung',
                description: 'Befehle zum Vergeben und Entfernen von Rollen.',
                slug: '/category/discord-befehle/admin-tools/rollen-befehle',
              },
              items: [
                'discord-befehle/Admin Tools/Rollen-Befehle/RolesGive',
                'discord-befehle/Admin Tools/Rollen-Befehle/RolesRemove',
                'discord-befehle/Admin Tools/Rollen-Befehle/RolesStatus',
              ],
            },
            {
              type: 'category',
              label: 'Extra-Befehle',
              link: {
                type: 'generated-index',
                title: 'Extra Befehle Übersicht',
                description: 'Befehle zum Stehlen von Emojis und Stickern.',
                slug: '/category/discord-befehle/admin-tools/extra-befehle',
              },
              items: [
                'discord-befehle/Admin Tools/Extra-Befehle/Stealemote',
              ],
            },
          ],
        },
        // --- KATEGORIE: AFK System ---
        {
          type: 'category',
          label: 'AFK System',
          link: {
            type: 'generated-index',
            title: 'AFK System Übersicht',
            description: 'Dein AFK-Status ganz einfach!',
            slug: '/category/discord-befehle/afk-system',
          },
          items: [
            'discord-befehle/AFK-System/AFK-Befehle/AFKEnd',
            'discord-befehle/AFK-System/AFK-Befehle/AFKStart',
          ],
        },
        // --- KATEGORIE: Bewerbungen ---
        {
          type: 'category',
          label: 'Bewerbungen',
          link: {
            type: 'generated-index',
            title: 'Bewerbungs-System Übersicht',
            description: 'Damit kannst du dich bei uns bewerben.',
            slug: '/category/discord-befehle/bewerbungen',
          },
          items: [
            'discord-befehle/Bewerbungen/Apply',
          ],
        },
        // --- KATEGORIE: Geburtstags-Kalender ---
        {
          type: 'category',
          label: 'Geburtstags-Kalender',
          link: {
            type: 'generated-index',
            title: 'Geburtstags-Kalender',
            description: 'Geburtstags-Kalender damit man sich gratulieren kann. :)',
            slug: '/category/discord-befehle/geburtstags-kalender',
          },
          items: [
            'discord-befehle/Geburtstags-Kalender/BirthdayDelete',
            'discord-befehle/Geburtstags-Kalender/BirthdaySet',
            'discord-befehle/Geburtstags-Kalender/BirthdayStatus',
          ],
        },
        // --- KATEGORIE: Color me ---
        {
          type: 'category',
          label: 'Color me',
          link: {
            type: 'generated-index',
            title: 'Color me',
            description: 'Wie bekommt man eine eigene Rolle?',
            slug: '/category/discord-befehle/color-me',
          },
          items: [
            'discord-befehle/Color me/Color-meManage',
            'discord-befehle/Color me/Color-meRemove',
          ],
        },
        // --- KATEGORIE: Minispiele ---
        {
          type: 'category',
          label: 'Minispiele',
          link: {
            type: 'generated-index',
            title: 'Minispiele',
            description: 'Hier findest du alle Minispiele die es auf dem Server gibt.',
            slug: '/category/discord-befehle/minispiele',
          },
          items: [
            'discord-befehle/Minispiele/ConnectFour',
            'discord-befehle/Minispiele/Duel',
          ],
        },
        // --- KATEGORIE: Economy ---
        {
          type: 'category',
          label: 'Economy/Wirtschaft',
          link: {
            type: 'generated-index',
            title: 'Economy/Wirtschaft Übersicht',
            description: 'Alle Befehle zum Wirtschaft bzw. Economy System.',
            slug: '/category/discord-befehle/economy',
          },
          items: [
            {
              type: 'category',
              label: 'Economy-Befehle',
              link: {
                type: 'generated-index',
                title: 'Economy-Befehle',
                description: 'Hier findet ihr Befehle zum Coins verdienen, ausgeben usw.!',
                slug: '/category/discord-befehle/economy-system/economy-befehle',
              },
              items: [
                'discord-befehle/Economy System/Economy-Befehle/EconomyAdd',
                'discord-befehle/Economy System/Economy-Befehle/EconomyBalance',
                'discord-befehle/Economy System/Economy-Befehle/EconomyCrime',
                'discord-befehle/Economy System/Economy-Befehle/EconomyDaily',
                'discord-befehle/Economy System/Economy-Befehle/EconomyDeposit',
                'discord-befehle/Economy System/Economy-Befehle/EconomyDestroy',
                'discord-befehle/Economy System/Economy-Befehle/EconomyDropDisable',
                'discord-befehle/Economy System/Economy-Befehle/EconomyDropEnable',
                'discord-befehle/Economy System/Economy-Befehle/EconomyRemove',
                'discord-befehle/Economy System/Economy-Befehle/EconomyRob',
                'discord-befehle/Economy System/Economy-Befehle/EconomySet',
                'discord-befehle/Economy System/Economy-Befehle/EconomyWeekly',
                'discord-befehle/Economy System/Economy-Befehle/EconomyWork',
              ],
            },
            {
              type: 'category',
              label: 'Shop-Befehle',
              link: {
                type: 'generated-index',
                title: 'Shop-Befehle',
                description: 'Hier geht es nur um den Economy Shop.',
                slug: '/category/discord-befehle/economy-system/shop-befehle',
              },
              items: [
                'discord-befehle/Economy System/Shop-Befehle/ShopAdd',
                'discord-befehle/Economy System/Shop-Befehle/ShopBuy',
                'discord-befehle/Economy System/Shop-Befehle/ShopDelete',
                'discord-befehle/Economy System/Shop-Befehle/ShopList',
              ],
            },
          ],
        },
        // --- KATEGORIE: Fun Befehle ---
        {
          type: 'category',
          label: 'Fun Befehle',
          link: {
            type: 'generated-index',
            title: 'Fun Befehle Übersicht', // Korrigiert
            description: 'Alle Befehle zu Spaß- und Interaktionsfunktionen.', // Korrigiert
            slug: '/category/discord-befehle/fun-befehle',
          },
          items: [
            {
              type: 'category',
              label: 'Interaktions-Befehle',
              link: {
                type: 'generated-index',
                title: 'Interaktions-Befehle',
                description: 'Hier findest du Befehle, die mit anderen Nutzern interagieren.',
                slug: '/category/discord-befehle/fun-befehle/interaktions-befehle',
              },
              items: [
                'discord-befehle/Fun-Befehle/Interaktions-Befehle/FunHug',
                'discord-befehle/Fun-Befehle/Interaktions-Befehle/FunKiss',
                'discord-befehle/Fun-Befehle/Interaktions-Befehle/FunPat',
                'discord-befehle/Fun-Befehle/Interaktions-Befehle/FunSlap',
              ],
            },
            {
              type: 'category',
              label: 'Random-Befehle',
              link: {
                type: 'generated-index',
                title: 'Random-Befehle',
                description: 'Lasse den Bot zufällige Aktionen ausführen.',
                slug: '/category/discord-befehle/fun-befehle/random-befehle',
              },
              items: [
                'discord-befehle/Fun-Befehle/Random-Befehle/Random8Ball',
                'discord-befehle/Fun-Befehle/Random-Befehle/RandomCoinflip',
                'discord-befehle/Fun-Befehle/Random-Befehle/RandomDice',
                'discord-befehle/Fun-Befehle/Random-Befehle/RandomIkea-name',
                'discord-befehle/Fun-Befehle/Random-Befehle/RandomNumber',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Gewinnspiel',
          link: {
            type: 'generated-index',
            title: 'Gewinnspiel',
            description: 'Hier die Infos zu Gewinnspiel-Befehlen.',
            slug: '/category/discord-befehle/gewinnspiele',
          },
          items: [
            'discord-befehle/Gewinnspiele/GMessages',
            'discord-befehle/Gewinnspiele/GmanageStart',
            'discord-befehle/Gewinnspiele/GmanageEnd',
            'discord-befehle/Gewinnspiele/GmanageReroll',
          ],
        },
        {
          type: 'category',
          label: 'Errate die Nummer',
          link: {
            type: 'generated-index',
            title: 'Errate die Nummer',
            description: 'Infos zum Errate die Nummer Spiel.',
            slug: '/category/discord-befehle/errate die nummer',
          },
          items: [
            'discord-befehle/Errate die Nummer/GuessCreate',
            'discord-befehle/Errate die Nummer/GuessEnd',
            'discord-befehle/Errate die Nummer/GuessStatus',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;