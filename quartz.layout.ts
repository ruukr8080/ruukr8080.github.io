import { PageLayout, SharedLayout,FolderPageLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { cursor } from "sisteransi"
import left = cursor.left
// import { QuartzEmitterPlugin } from "./quartz/plugins/types"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  left: [
    Component.Darkmode(),
    Component.MobileOnly(Component.Spacer()),
    Component.Nav(undefined),
    Component.Search(), //검색 기능
    Component.DesktopOnly(
      Component.Explorer({
        // title: "드롭다운",
        folderClickBehavior: "collapse",
        folderDefaultState: "collapsed",
        useSavedState: true,
        // public 폴더의 파일만 필터링
        // filterFn: (node) => {
        //   const path = node.file?.relativePath ?? node.name
        //   return path.startsWith("public")
        // },
        sortFn: (a, b) => a.name.localeCompare(b.name),
      }),
    ),
  ],
  
  footer: Component.ContentMeta()
}

// 메인 페이지 전용 레이아웃
export const mainPageLayout: PageLayout = {
  header: [],
  beforeBody: [],
  afterBody: [],
  right: [],
}


export const folderPageLayout: FolderPageLayout = {
  head: Component.Head(),
  afterBody: [],
  
  beforeBody: [
    // Component.Graph(),
    // Component.DesktopOnly(Component.RecentNotes({ title: "최근 글" })),
  ],
  right: [
    // Component.Graph(),
    // Component.Backlinks(),
  ]
}

// 폴더 페이지 컴포넌트 (e.g home> 노트) 페이지
export const defaultListPageLayout: PageLayout = {
  header: [Component.Breadcrumbs()  ],
  afterBody: [
    
  ],
  beforeBody: [
    Component.Graph()],
  // beforeBody: [Component.Graph(), Component.DesktopOnly(Component.RecentNotes({ title: "최근 글" })),],
  
  right: [
    // Component.Graph(),
    // Component.Backlinks(),
  ],
}



// 단일 페이지 컴포넌트 (content 페이지) (e.g home> 노트 > 제목) 페이지
export const defaultContentPageLayout: PageLayout = {
  header: [
    // Component.ArticleTitle(),
  ],
  beforeBody: [

    Component.Breadcrumbs(),
    // Component.ArticleTitle(), // 글 제목
    // Component.ContentMeta(), // 메타 정보
  ],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        // from data-repo
        repo: "ruukr8080/ruukr8080.github.io",
        // from data-repo-id
        repoId: "R_kgDOND4Puw",
        // from data-category
        category: "댓글",
        // from data-category-id
        categoryId: "DIC_kwDOND4Pu84Cj71_",
      },
    }),
  ],
  right: [
    // Component.Graph(),
    // Component.TableOfContents(), // 목차
    // Component.DesktopOnly(Component.TableOfContents()),
    // Component.Backlinks(),
  ],
}

