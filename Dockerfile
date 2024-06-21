# 기본 이미지 선택: Ruby 기반 이미지를 선택합니다.
FROM ruby:latest

# 환경 설정 및 필요한 패키지 설치
RUN apt-get update && apt-get install -y \
    build-essential \
    nodejs \
    npm \
    && gem install bundler

# 작업 디렉토리 설정
WORKDIR /app

# Gemfile 및 Gemfile.lock 복사
COPY Gemfile Gemfile.lock ./

# Gem 설치
RUN bundle install

# 소스 코드 복사
COPY . .

# Jekyll 서버 실행 명령어
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
