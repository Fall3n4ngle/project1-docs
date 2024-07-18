// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Knowledge Base",
  tagline: "Human-centric content discovery ​done right​",
  favicon: "img/cropped-zoovu-favicon-32x32.png",
  organizationName: "Zoovu",
  projectName: "Knowledge Base",

  // Set the production url of your site here
  url: "https://docs.zoovu.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        api: {
          path: "openapi/audit-openapi.yaml",
          routeBasePath: "/api/audit",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi",
      {
        id: "remote",
        path: "openapi/remote-strategy-openapi.yaml",
        routeBasePath: "/api/remote-strategy-api",
      },
    ],
    [
      "docusaurus-plugin-openapi",
      {
        id: "platform",
        path: "openapi/platform-v1-openapi.yaml",
        routeBasePath: "/api/platform",
      },
    ],
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/cropped-zoovu-favicon-32x32.png",
      navbar: {
        logo: {
          alt: "Zoovu Knowledge Base",
          src: "img/zoovu-logo-light.svg",
          srcDark: "img/zoovu-logo-dark.svg",
          width: 70,
          style: {
            "margin-right": "1rem",
          },
        },

        items: [
          {
            to: "/",
            label: "Help articles",
            position: "left",
          },
          {
            to: "/1",
            label: "Trainings",
            position: "left",
          },
          {
            to: "/2",
            label: "Release notes",
            position: "left",
          },
          {
            to: "/3",
            label: "Developers",
            position: "left",
          },
          {
            to: "/4",
            label: "Api",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Privacy policy",
            href: "/privacy-policy",
          },
          {
            label: "Terms of use",
            href: "/terms-of-use",
          },
        ],
        logo: {
          alt: "Zoovu Internal Documentation",
          src: "img/zoovu-logo-dark.svg",
        },
        copyright: `Copyright © ${new Date().getFullYear()} Zoovu.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["powershell"],
      },
      api: {
        authPersistance: "localStorage",
        serverVariablesPersistance: "localStorage",
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  scripts: [
    {
      src: "/js/search.js",
      defer: true,
    },
  ],
};

module.exports = config;
