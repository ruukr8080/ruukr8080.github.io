/** @jsxImportSource react */
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"


export const landingPageLayout: PageLayout = {
  beforeBody: [
    Component.PageNav()
  ],
  left: [],
  right: []
}

// components shared across all pages\
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.PageNav()],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/ruukr8080/ruukr8080.github.io",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
