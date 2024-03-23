import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "Back to Homepage": "https://neowang0122.github.io/page/", 
      GitHub: "https://github.com/neowang0122/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Component.PageTitle(),
    // Component.Search(),
    // Component.Darkmode(),
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    // Component.TagList(),
    // Component.MobileOnly(Component.TableOfContents()), 
  ],
  left: [
    Component.PageTitle(),
    Component.Darkmode(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    // Component.PageTitle(),
    // Component.MobileOnly(Component.Spacer()),
    // Component.Search(),
    // Component.Darkmode(),
    // Component.DesktopOnly(Component.RecentNotes()), 
    // Component.DesktopOnly(Component.Explorer()),
    // Component.DesktopOnly(Component.TableOfContents()),
  ],
  right: [
    // Component.Graph(),
    // Component.Backlinks(), 
    Component.RecentNotes({ 
      title: "Recent Writing", 
      limit: 5, 
      filter: (f) => 
        f.slug!.startsWith("Posts/") && !f.slug!.match(/\/index$/) && !f.frontmatter?.noindex, 
      linkToMore: "./Posts" as SimpleSlug}),  
    Component.RecentNotes({ 
      title: "Recent Readings", 
      limit: 5, 
      filter: (f) => 
        f.slug!.startsWith("Readings/") && !f.slug!.match(/\/index$/) && !f.frontmatter?.noindex, 
      linkToMore: "./Readings" as SimpleSlug}),  
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    // Component.PageTitle(),
    // Component.Search(),
    // Component.Darkmode(),
    // 
    Component.Breadcrumbs(),
    Component.ArticleTitle(), 
    Component.ContentMeta(), 
  ],
  left: [
    Component.PageTitle(),
    Component.Darkmode(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    // Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    // Component.Graph(),
    // Component.Backlinks(), 
    Component.RecentNotes({ 
      title: "Recent Writing", 
      limit: 5, 
      filter: (f) => 
        f.slug!.startsWith("Posts/") && !f.slug!.match(/\/index$/) && !f.frontmatter?.noindex, 
      linkToMore: "./Posts" as SimpleSlug}),  
    Component.RecentNotes({ 
      title: "Recent Readings", 
      limit: 5, 
      filter: (f) => 
        f.slug!.startsWith("Readings/") && !f.slug!.match(/\/index$/) && !f.frontmatter?.noindex, 
      linkToMore: "./Readings" as SimpleSlug}),  
  ],
}
