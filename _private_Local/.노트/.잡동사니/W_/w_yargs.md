---
title: yarg
type: word
tags: [word,yarg]
---

# yarg란?

Yargs는 Node.js 환경에서 `npm packages`나 `개발 툴(플러그인,라이브러리같은거)` 만들 때 쓴다.

> CLI 파싱 라이브러리

- 특징
  - 직관적인 API
  - 풍부한 기능 (명령어, 옵션, 유효성 검사 등)
  - 자동 도움말 생성
  - 설정 파일 지원

---


## CLI 파싱 예시

```js
#!/usr/bin/env node
const yargs = require('yargs');

// 기본 사용
const argv = yargs
    .option('name', {
        alias: 'n',
        description: '이름을 입력하세요',
        type: 'string',
        demandOption: true
    })
    .argv;

console.log(`안녕하세요 ${argv.name}님!`);

// 실행: node app.js --name "김철수" 
// 또는: node app.js -n "김철수"
```

---



```shell
my-program.js serve --port=5000

```

[official](https://www.npmjs.com/package/yargs)
[github](https://github.com/yargs/yargs)

---

## Demo

- 커맨드 입력
```shell
my-program.js serve --port=5000
```

- 결과
```shell
mocha [spec..]

Run tests with Mocha

Commands
  mocha inspect [spec..]  Run tests with Mocha                         [default]
  mocha init <path>       create a client-side Mocha setup at <path>

Rules & Behavior
  --allow-uncaught           Allow uncaught errors to propagate        [boolean]
  --async-only, -A           Require all tests to use a callback (async) or
                             return a Promise                          [boolean]
```
- bash-completion shortcuts for commands and options.
- and tons more.


---

## Commands 

```js
yargs
    .command('create', '새 프로젝트 생성', {
        name: {
            description: '프로젝트 이름',
            alias: 'n',
            type: 'string',
            demandOption: true
        },
        template: {
            description: '템플릿 종류',
            alias: 't',
            type: 'string',
            default: 'basic'
        }
    }, (argv) => {
        console.log(`${argv.name} 프로젝트를 ${argv.template} 템플릿으로 생성합니다`);
    })
    .command('deploy', '프로젝트 배포', {
        env: {
            description: '배포 환경',
            choices: ['dev', 'prod'],
            demandOption: true
        }
    })
    .demandCommand(1, '명령어를 입력해주세요.')
    .help()
    .argv;

// 실행: node app.js create --name "my-project" --template "react"
// 실행: node app.js deploy --env prod
```

