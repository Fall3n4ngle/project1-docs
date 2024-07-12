---
sidebar_position: 0
title: "A quick-start guide to Search Studio"
sidebar_label: Getting started
---

import BrowserWindow from "@site/src/components/BrowserWindow";

# A quick-start guide to Search Studio

:::info

To activate Search Studio, please contact your Zoovu representative or email external.customer.success@zoovu.com.

:::

This quick-start guide will help you get your new search up and running on your site in 3 steps:
1. [Check your indexed site(s)](#check-your-indexed-sites)
2. [Improve your indexed content](#improve-your-indexed-content)
3. [Install your new search on your site](#install-your-new-search-on-your-site)

## Check your indexed site(s)

To get the best search results, start by setting up the crawler. The crawler scans your website to gather the data needed for the search index.

- Log in to Search Studio.
- Navigate to **Data Sources > Website Crawling**.
- Verify that we are crawling the correct website(s): add Root URLs (a Root URL is the main address of your website, like https://www.example.com) or Full Base URL (a more specific address that can point the crawler to a sitemap or a particular section, like https://www.example.com/sitemap.xml or https://www.example.com/store/)

<!-- <BrowserWindow url="https://search.zoovu.com">
![Website crawling](./img/website_crawling.png)
</BrowserWindow> -->

:::tip

Consider providing a sitemap under **Sitemap Indexing** instead of your root URL. In addition to ensuring faster and more efficient crawling of your site, it's an integral part of good SEO practices.

:::

<!-- <BrowserWindow url="https://search.zoovu.com">
![Sitemap indexing](./img/sitemap_indexing.png)
</BrowserWindow> -->

## Improve your indexed content

The dashboard shows how many pages (and possibly products) are in your index:

<!-- <BrowserWindow url="https://search.zoovu.com">
![Total indexed entries](./img/total_indexed_entries.png)
</BrowserWindow> -->

If the crawler has made enough progress:
- Go to the Search Preview (in the left navbar) and test a few queries. Testing here does not affect your quotas.
- If you are happy with your search results, you can already move to step 3 and [install your new search on your site](#install-your-new-search-on-your-site).

:::tip

Not sure whether your index needs improving? Go to **Search Studio > Index > Content List** to review your indexed pages.

:::

If you see unwanted pages or unexpected results, follow these steps to refine your index:

### Blacklisting and Whitelisting

To make sure your search only finds the pages you want, you can use black- and whitelisting in Sitemap Indexing settings. Both should be used carefully since they have a big impact on your search index.

**Blacklisting** excludes pages from your search index, and also prevents the crawler from following links on those pages.

**Whitelisting** tells the crawler that only pages fitting the whitelisting rules should be added to the search.

:::info

No-index URL pattern means the crawler will not index pages with the URL pattern (e.g. /tag/), but it will still follow links to potentially relevant pages.

:::
<!-- 
<BrowserWindow url="https://search.zoovu.com">
![Blacklisting and Whitelisting](./img/black_and_whitelisting.png)
</BrowserWindow> -->

You can blacklist or whitelist using URL patterns, XPath, and/or CSS selectors. For example, you might blacklist the URL pattern `/tag/` if pages like `https://mysite.com/tag/inventory` clutter your index and do not belong in your search.

### Possible Issues

If you have problems with duplicate URLs (e.g. `mysite.com` and `mysite.com/` or `mysite.com/page` and `mysite.com/page?utm_campaign=google`), please refer to the crawler settings.

### Adjust Titles, Images, Content

The crawler automatically pulls relevant content for titles, images, and descriptions. If it doesn't find the right content, you can specify what to use under **Data Structuring > Content Extraction** using XPaths or CSS selectors.
<!-- 
<BrowserWindow url="https://search.zoovu.com">
![Content extraction](./img/content_extraction.png)
</BrowserWindow> -->

Common sections to exclude include headers, footers, and navigation.

After making changes, reindex your site and test the search again.

## Install your new search on your site

Now you're ready to install the new search on your site.

- Go to **Search Studio > Design & Publish** to customize the look and feel of your search.

<!-- <BrowserWindow url="https://search.zoovu.com">
![Content extraction](./img/search_bar_settings.png)
</BrowserWindow> -->

- Decide whether to connect Zoovu Search to an existing search bar or add a new one.

#### Connect to an existing search bar

Load your website in the top bar, and we'll try to detect the search bar automatically. If automatic detection fails, provide the CSS selector pointing to your search bar.

If the search bar is not detected automatically, please provide the CSS selector pointing to it.

#### Add a new search bar:

Insert the following code snippet where you want the search box and button to appear (e.g., in your site's header):

```html
<section role="search" data-zoovu="true">
   <input type="search" id="searchBox" placeholder="Search…">
   <button id="searchButton"></button>
</section>
```
You can also choose the "Add a search bar to my website" option in **Search Studio > Design & Publish > General settings > Search Bar settings** and specify where you want the search box to appear.

Then, press "Publish" in the top-right corner to get your personalized code snippet.

```html
<script async src="ht
tps://js.search-studio.zoovu.com/plugin/bundle/0000.js"></script>
```

Place your script before the closing `</body>` tag in your site template. (Note: the last four digits are different for every project, so use your specific code.)

To apply future changes, just click "Publish" in the Search Designer.