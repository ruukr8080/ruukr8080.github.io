---
title: Quartz blog만들기
type: project
tags: [project]
---
### Quartz 선택한 이유
* 그래프뷰 <- 제일 큼.
* Google Analytics 설정이 간편함. (config.toml 파일에서 Analytics 측정 ID만 수정하면 됨.)
* sns(youtube 같은) 플랫폼과 상호작용이 쉬움


### create repository use quartz template 

- [move to quartz github](https://github.com/jackyzha0/quartz)

1. Use this template 
2. Create new repository

---

### clone in to local - initialize

```bash
git clone < my repo >
```

### Building my Quartz

- build Quartz on local PC

> `npx quartz build --serve 3306`


---


### learn quartz

- [quartz advanced/Architecture-(original)](https://quartz.jzhao.xyz/advanced/architecture)
- [quartz advanced/Architecture-(korean)](#architecture-korean)

- [quartz advanced/creating-components-(original)](https://quartz.jzhao.xyz/advanced/creating-components)
- [quartz advanced/creating-components-(korean)](#Custom)

### Customization

- Feater-list
    - [Private Pages]()
    - [Internationalization]() 
    - [Popover Previews]() like `wikipedia`
    - [RSS Feed]() 
    - [Syntax Highlighting]
- Plugins
    - [AliasRedirects]
    - [CNAME]
    - [ContentPage]
    - [FolderPage]
    - [Static]
    - [TagPage]
- Set contents template
    - [Authoring Contents]()
- [Hosting](#Hosting)
    - Setting up Hosting server

---

## Architecture-(korean)

> Quartz는 정적 사이트 생성기입니다. 어떻게 작동할까요?
    > 이 질문은 사용자(you!)가 명령줄에서 `npx quartz build`를 실행할 때 무슨 일이 일어나는지 설명하는 것으로 가장 잘 답할 수 있다.

### Server process

#### `npx quartz build` 입력
`npx quartz build`이 입력되면, `npm`은 `package.json`파일을 통해 quartz의 bin 항목( 34 line )을 찾는다. 

이 항목은 `./quartz/bootstrap-cli.mjs`를 가리킨다.

> `bootstrap-cli.mjs`의 첫번째 라인에는 `npm`에게 `Node`를 사용하여 실행하라고 알려주는 [shebang](https://bcp0109.tistory.com/343) 커맨드가 있다.
> `#!`를 `shebang`이라 부른다.
```js
#!/usr/bin/env node
```

#### `bootstrap-cli.mjs` 실행

- hot-reload port: ` --serve 3001`  
- default port: `8080`

1. `yargs`를 사용하여 `script CLI`를 파싱한다.
2. `esbuild`로 변환/번들링 한다. 
    - `esbuild-sass-plugin v2`가 `.scss` 파일을 import한다.
    - client script인 `.inline.ts`를 브라우저에서 바로 실행 가능한 형태로 코드 변환하기 위해 esbuild 인스턴스 실행한다.

3. `build.ts`(build process) 실행.
    1. output 디렉토리 초기화
    2. content 폴더의 모든 파일 검색
    3. `.md` , `.html` 파일 파싱. `128개 이상:multi-thread, 미만:single-thread`
        - vfile로 읽는다.
        - text 변환 적용
        - file path 슬러그화
        - `remark-parse`로 markdown-parshing하고 변환한다.
        - `remark-rehype`로 HTML-HTML 변환하고 불필요한 contents는 필터링한다.
4. `Emitters-plugin`(parsing & transform) 작동.()
    - `Emitters-plugin`이 static resources(e.g. external CSS, JS modules, etc.)들을 parsing하고 HTML파일을 변환-생성한다.
        - parse 단계에서 생선된 `hast` 를 `jsx`로 변환. 
        - `hast-util-to-jsx-runtime`으로 JSX를 정적 html로 렌더링(useState,useRffect 따위의 React/Preact 동적 기능 제외)
        - Page-Layout 조립 (quartz.layout.ts 참조)
        - `Client-inline-script` 조힙
        - 변환된 style 적용
        - 이 모든 로직은 -> quartz/components/renderPage.tsx를 참조한다.
    - 추가 최적화 작업
        - `Lightning Css`로 CSS 최적화. (구문을 단순화하고 `vender prefix`를 추가함.)
        - Script 분리
            * beforeDOMLoaded → <head>에 insert
            * afterDOMLoaded → <body>에 insert
    - `Emitters-plugin`이 생성한 file들을 disk에 저장한다.


## Deploy

### Default setting

> 1. Setting up Github repository
> 2. Setting up General Configuration in project
> 3. Prepare Hosting Server


1. Setting up GitHub repository

```shell
# 현재 연결된 git repository url 확인
git remote -v

# git repository URL my repository로 변경
git remote set-url origin https://github.com/ruukr8080/ruukr8080.github.io.git

# 쿼츠 업데이트를 위한 upstream 추가 
git remote add upstream https://github.com/jackyzha0/quartz.git

# 내 repository에 Contents를 동기화
npx quartz sync --no-pull
```

> In future updates, you can simply run npx quartz sync every time
> you want to push updates to your repository.


---

2. Setting up General Configuration in project
> 배포 전 baseUrl을 비롯한 `General Configuration`설정을 해야한다. 
> 안그럼 일부 Quartz 기능(예: `RSS 피드` 및 사이트맵 생성)이 제대로 동작 안할 수도 있다.
>
- 필수 설정 항목
    - pageTitle (site name)
    - baseUrl (github-pages url)
    - locale (한국어 = `ko-KR`)

- `pageTitle`: 사이트의 제목. RSS 피드 생성할 때도 이 제목이 사용됨
- `pageTitleSuffix`: 브라우저 탭에 보이는 페이지 제목 뒤에 붙는 텍스트. (실제 페이지 상단의 제목에는 안 보임)
- `enableSPA`: SPA(Single Page Application) 라우팅 사용할지 여부
- `enablePopovers`: 프리뷰 팝업 기능 사용할지 여부
- `analytics`: 어떤 분석 도구를 쓸지 설정
    - `null`: 분석 안 함
    - `Google Analytics`
    - `Plausible`
    - `Umami`
    - `GoatCounter`
    - `Posthog`
    - `Tinylytics`
    - `Cabin`
    - `Microsoft Clarity`
- `locale`: 날짜 형식이나 국제화(i18n)에 사용되는 언어 설정
- `baseUrl`: 사이트맵이나 RSS용 기본 URL `github-pages라면 'ruukr8080.github.io' 이런 식으로. 'https://' 같은 프로토콜은 입력 금지`
- `ignorePatterns`: content 폴더에서 제외할 파일 패턴들
- `defaultDateType`: 페이지에 표시할 기본 날짜 타입
    - `created`: 생성일
    - `modified`: 수정일
    - `published`: 발행일
- `theme`: 사이트 디자인 관련 설정
    - `cdnCaching`: 구글 CDN 폰트 사용 여부
    - `typography`: 폰트 설정 (구글 폰트에서 고를 수 있음)
        - `header`: 제목용 폰트
        - `code`: 코드용 폰트
        - `body`: 본문용 폰트
    - `colors`: 색상 테마 설정
- `light`: 배경색
- `lightgray`: 테두리
- `gray`: 그래프 링크, 굵은 테두리
- `darkgray`: 본문 텍스트
- `dark`: 헤더 텍스트와 아이콘
- `secondary`: 링크 색상
- `tertiary`: 호버 상태
- `highlight`: 내부 링크 배경, 강조 텍스트
- `textHighlight`: 마크다운 강조 텍스트 배경


3. Setting up Hosting server
> GitHub Pages로 할거임.


create a new file `quartz/.github/workflows/deploy.yml.`

---
`deploy.yml`
```yml

name: Deploy Quartz site to GitHub Pages
 
on:
  push:
    branches:
      - v4
 
permissions:
  contents: read
  pages: write
  id-token: write
 
concurrency:
  group: "pages"
  cancel-in-progress: false
 
jobs:
  build:
    runs-on: ubuntu-22.04
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Fetch all history for git info
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Install Dependencies
        run: npm ci
      - name: Build Quartz
        run: npx quartz build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: public
 
  deploy:
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
Then:

Head to “Settings” tab of your forked repository and in the sidebar, click “Pages”. Under “Source”, select “GitHub Actions”.
Commit these changes by doing npx quartz sync. This should deploy your site to <github-username>.github.io/<repository-name>.



---


## General Configuration

This part of the configuration concerns anything that can affect the whole site. The following is a list breaking down all the things you can configure:

- pageTitle: title of the site. This is also used when generating the RSS Feed for your site.

- pageTitleSuffix: a string added to the end of the page title. This only applies to the browser tab title, not the title shown at the top of the page.

- enableSPA: whether to enable SPA Routing on your site.

- enablePopovers: whether to enable popover previews on your site.

- analytics: what to use for analytics on your site. Values can be null: don’t use analytics;

    - { provider: 'google', tagId: '<your-google-tag>' }: use Google Analytics;

    - { provider: 'plausible' } (managed) or { provider: 'plausible', host: '<your-plausible-host>' } (self-hosted): use Plausible;

    - { provider: 'umami', host: '<your-umami-host>', websiteId: '<your-umami-website-id>' }: use Umami;

    - { provider: 'goatcounter', websiteId: 'my-goatcounter-id' } (managed) or { provider: 'goatcounter', websiteId: 'my-goatcounter-id', host: 'my-goatcounter-domain.com', scriptSrc: 'https://my-url.to/counter.js' } (self-hosted) use GoatCounter;

    - { provider: 'posthog', apiKey: '<your-posthog-project-apiKey>', host: '<your-posthog-host>' }: use Posthog;

    - { provider: 'tinylytics', siteId: '<your-site-id>' }: use Tinylytics;

    - { provider: 'cabin' } or { provider: 'cabin', host: 'https://cabin.example.com' } (custom domain): use Cabin;

    - {provider: 'clarity', projectId: '<your-clarity-id-code' }: use Microsoft clarity. The project id can be found on top of the overview page.

- locale: used for i18n and date formatting

- baseUrl: this is used for sitemaps and RSS feeds that require an absolute URL to know where the canonical ‘home’ of your site lives. This is normally the deployed URL of your site (e.g. quartz.jzhao.xyz for this site). Do not include the protocol (i.e. https://) or any leading or trailing slashes.
    - This should also include the subpath if you are hosting on GitHub pages without a custom domain. For example, if my repository is jackyzha0/quartz, GitHub ages would deploy to https://jackyzha0.github.io/quartz and the baseUrl would be jackyzha0.github.io/quartz.

    - Note that Quartz 4 will avoid using this as much as possible and use relative URLs whenever it can to make sure your site works no matter where you end up actually deploying it.

- ignorePatterns: a list of glob patterns that Quartz should ignore and not search through when looking for files inside the content folder. See private pages for more details.

- defaultDateType: whether to use created, modified, or published as the default date to display on pages and page listings.

- theme: configure how the site looks.

    - cdnCaching: If true (default), use Google CDN to cache the fonts. This will generally will be faster. Disable (false) this if you want Quartz to download the fonts to be self-contained.

    - typography: what fonts to use. Any font available on Google Fonts works here.

        - header: Font to use for headers

        - code: Font for inline and block quotes.

        - body: Font for everything

    - colors: controls the theming of the site.

        - light: page background

        - lightgray: borders

        - gray: graph links, heavier borders

        - darkgray: body text

        - dark: header text and icons

        - secondary: link colour, current graph node

        - tertiary: hover states and visited graph nodes

        - highlight: internal link background, highlighted text, highlighted lines of code

        - textHighlight: markdown highlighted text background

---

## 리로드 문제 발생

layout을 변경하고싶은데,
서버를 껏다켜야만 변경사항이 적용됐다.

`package.json`에서 `npx quartz build --serve`가 어떻게 돌아가는지는 위에서 학습했다.

파싱 된 커맨드 파일인 `bootstrap-cli.mjs` 에서 확인해보니

`Contents` 만 감지하고 레이아웃은 감지 안한다.

그래서 해결 방법으로 nodemon을 인스톨하고 
`"scripts": ` 내부에 
새로운 커맨드라인을 생성 해줬다.


```shell
//linux
"dev": "nodemon --watch quartz.layout.ts --watch quartz.config.ts --ext ts,tsx,scss --exec 'npx quartz build --serve'"
```

```shell
//window
"dev": "nodemon --watch quartz.layout.ts --watch quartz.config.ts --ext ts,tsx,scss --exec \"npx quartz build --serve\""
```  
## 리로드 문제 조사
- Quartz 커뮤니티{ 디스코드 } 에 리로드 관련돼서 징징거리는 유저 발견.  
- Quartz 깃허브 최근 커밋 내역 보니 리로드 관련 커밋메세지가 많음.

## 리로드 문제 해결
새로 Watch 스크립트 파일 하나 만들기

1. project의 root 폴더에 새로 `watch.config.js` 파일 생성.
```js
export const watchTargets = [
  "quartz/styles",
  // "quartz/styles/**/*scss",
  // "testDir/*.ts",
  // "*.js",
  // "**/*.md"
]
```
---
2. `quartz/cli/handler.js/` 
handler.js 파일에 import 해준다.
   1. import { watchTargets } from "../../watch.config.js"
   2. `chokidar.watch()`- 431번 line에 메서드 추가

> 고치기 힘들어보이면 새로 만들어라.

---


