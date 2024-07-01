# frozen_string_literal: true

source "https://rubygems.org"

#제거대상
# gem 'csv'
# gem 'base64'
gem 'jekyll-avatar', '~> 0.8.0' # Github 아바타를 표시할 수 있게 해줌
gem 'jekyll-default-layout', '~> 0.1.5' #기본 레이아웃을 설정해줌
gem 'jekyll-feed', '~> 0.17.0' # 지킬 게시물의 Atom 피드를 생성하기 위한 지킬 플러그인



gem 'tzinfo' #타임존
gem 'tzinfo-data' #타임존

gem 'jekyll-gist', '~> 1.5' #Liquid tag for displaying GitHub Gists in Jekyll sites.
gem 'jekyll-commonmark', '~> 1.4' #CommonMark (Markdown의 확장된 버전) 파서를 사용합니다.
gem 'coderay' #CommonMark는 코드블럭이 ㅄ같아서 이거 써야댐
gem 'jekyll-octicons', '~> 19.8' #Github에서 만든 다운로드 가능한 SVG 아이콘 모음
gem 'sass', '~> 3.7', '>= 3.7.4' # Sass 스타일시트를 사용합니다
gem 'jekyll-paginate'
gem 'jekyll-seo-tag'
gem 'jekyll-sitemap' #사이트맵생성 자동화
gem 'jekyll-redirect-from' #페이지 리다이랙션 설정하게해줌
gem 'jekyll-archives' 
# gem 'kramdown-parser-gfm'
gem 'jekyll-include-cache'

group :jekyll_plugins do
  gem "jekyll-scholar" # 학술 논문 및 참고문헌 관리 기능을 제공하는 플러그인입니다
  gem "jekyll-mentions" #블로그 포스트에서 GitHub 사용자 멘션 기능을 추가해줍니다.
  gem "jekyll-toc" #포스트의 목차(Table of Contents)를 자동으로 생성해줍니다.
  gem 'jekyll-compose' # HTML 파일을 압축하여 공백을 제거하고 줄바꿈을 최소화하여 파일 크기를 줄이는 역할을 합
  # gem 'jekyll-watch', '~> 2.2', '>= 2.2.1'
  gem "jekyll-theme-chirpy", "~> 7.0", ">= 7.0.1"
end

group :test do
  gem 'html-proofer', '~> 5.0'
end