# Knowledge Base

This documentation project is the source for our Knowledge Base available on https://docs.zoovu.com.

The intended audience of this documentation is both our own delivery teams, (technical) partners and customers that will build experiences on our platforms. Their profile is similar to our custom dev and solutions people.

The documentation should contain the information we use ourselves to get the most of our platform. This includes information on the APIs, CSS architecture of our assistants, SDK documentation of our libraries used in the browser.

## List of changes applied
[CHANGES.md](CHANGES.md)

## Contributing

> **Recording available**
> If you don't like to read, you can watch the following [recording](https://zoovu2-my.sharepoint.com/:v:/g/personal/j_decommer_zoovu_com/EXR-WTKQ9cRIr0-FgJZ-AGYBBx-NjAfaoJ7qFctfXQEZdg?e=jcUO7k).

> **Note**
> Contributing will require some familiarity with Git.
> Alternatively, you can follow the instructions in [contribute with Web IDE](CONTRIBUTE_WITH_WEB_IDE.md).

- Follow the [Getting Started](#getting-started) guidelines below.
- Start from the `master` branch:  `git checkout master`
- Make sure you have the latest changes: `git pull`
- Create your own feature branch: `git checkout -b 'best-doc-ever'`
- Add your changes to the `docs` folder. Your documentation should be added as MarkDown files. You can read more about MarkDown in the [Docusaurus documentation](https://docusaurus.io/docs/markdown-features).
- Once your done, create a commit and push your changes to your feature branch.
- Create a merge request and have someone review your documentation.
- Even documentation that is not finished can be pushed to master if the document has `draft:true` in its [front matter](https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-content-docs#draft).

### Adding OpenAPI specifications

- Add your source file in the openapi folder
- Add a configuration to `plugins` in `docusaurus.config.js`

```javascript
    [
      "docusaurus-plugin-openapi",
      {
        id: "product-search",
        path: "openapi/product-search-openapi.yaml",
        routeBasePath: "/api/product-strategy-api",
      },
    ],
```

- Add a link to the generated documentation in the menu configuration in `docusaurus.config.js`. *themeConfig > navbar > items > [label: API]*

## Docusaurus Started

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Prerequisites

Please refer to [Installation](https://docusaurus.io/docs/installation).

While all actions can be performed using `npm`, the documentation uses `yarn`.
`yarn` can be installed following the instructions in [Installation](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).

### Installation

```bash
yarn install
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The CI pipeline is configured to automatically deploy changes from tags with the pattern `release/*` to the production environment ([docs.zoovu.com](https://docs.zoovu.com)). Changes merged back to `master` branch get deployed to development environment ([docs.dev.zoovu.io](https://docs.dev.zoovu.io)). 

Other branches can be deployed to the development environment manually using prepared CI jobs.

### Infrastructure

Both development and production environments store the website files in Azure Blob Storage container, which in turn is mounted as Kubernetes Persistent Volume to a pod running Nginx server. To deploy Nginx on Kubernetes we're using [Bitnami Nginx Helm Chart](https://artifacthub.io/packages/helm/bitnami/nginx), version 14.2.1.

### Useful plugins

- In VS Code, install Mermaid Markdown support (bierner.markdown-mermaid)