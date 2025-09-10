---
title: "주석 분석기를 이용한 간단한 API 문서화 방법"
source: "https://engineering.linecorp.com/ko/blog/comments-parsing-api-documentation"
author:
  - "[[전정은]]"
published:
created: 2025-09-10
description: ""
tags:
  - "clippings"
---
## Blog

  

## 주석 분석기를 이용한 간단한 API 문서화 방법

테크니컬 라이터로서 가장 재미있는 순간은 바로 새로운 프로젝트를 시작할 때입니다. 프로젝트를 시작하는 순간에는 모든 것이 열려 있어 자유로우며, 그 자유가 새로운 도메인에 대한 탐구심을 자극하기 때문입니다. 그런 점에서 짧지만 굵게 새로운 것을 시도하고 배울 수 있는 기술 문서 컨설팅은 제게 참 신나는 업무입니다. 이번 글에서는 몇 달 전에 진행했던 API 문서화 컨설팅에서 배운 내용을 공유하려 합니다. 주제는 새로운 언어를 위한 소스 코드 주석 기반 API 문서화 도구 만들기입니다. 정확히 말하면 '도구 만들기'라기보다 '도구 찾아 적용하기'이므로, 코딩이 많이 필요할 거라는 기대 혹은 염려는 가슴 한편에 고이 접어둬도 좋습니다.

소스 코드 주석으로 남긴 API 설명을 자동으로 문서로 만드는 일은 흔하디흔합니다. 대표적인 예가 Javadoc이나 JSDoc과 같은 도구로, 흔히 쓰는 프로그래밍 언어에서는 대체로 이런 문서화 도구를 사용해 문서를 만들 수 있습니다. 어떤 언어에 어떤 도구를 사용할 수 있는지 미리 파악해놨다가, A 언어로 개발한 API 레퍼런스를 만들고 싶다는 질문을 받고 '그 언어라면 B 도구나 C 도구를 쓸 수 있는데, 프로젝트 환경을 보니 C가 제일 좋겠군요'하고 답하는 것이 API 문서화 컨설팅의 시작입니다. 물론 워낙 잘 알려져 있어서 의뢰 팀이 미리 도구를 정해 오기도 하지만, 보통은 이렇게 시작합니다.

올 초에도 이런 API 문서 컨설팅을 하나 맡았습니다. 재미있게도 이 프로젝트는 널리 쓰는 프로그래밍 언어가 아닌, 특정 솔루션에서만 쓸 수 있는 자체 스크립트를 사용하고 있었습니다. 이 스크립트는 API 문서 생성 도구를 제공하지 않으며, 문법이 달라서 기존 도구를 사용할 수도 없습니다. 그러다 보니 자동화는 어렵지 않을까 싶었으나, 아직 문서 작업을 시작하지 않은 상태라 주석 서술 규칙을 정할 수 있다는 이야기에 희망이 생겼습니다. 주석의 서술 규칙을 단순화하면, 아무리 새로운 언어라 해도 주석 내용을 분석하기가 그리 어렵지 않을 테니까요. 그렇게 'API 문서화 도구가 없는 프로그래밍 언어의 소스 코드 기반 API 문서화 도구 만들기'를 시작하게 되었습니다. 그때 했던 작업을 다음과 같은 순서로 설명하겠습니다.

1. 주석 서술 규칙 정의
2. 파서 사용자화
3. 주석 데이터 문서화

## 주석 서술 규칙 정의

주석 서술 규칙 정의 단계에서는 문서에 표시해야 할 API 정보를 결정하고 그 정보를 소스 코드 주석에 어떻게 표기할 것인지를 정의합니다. 보통 문서에 담을 API 정보에 관해 의뢰한 팀의 요구 사항을 먼저 들은 뒤, 널리 쓰는 API 주석 형식을 참고해 표기법과 정보 분류용 태그를 결정합니다. 간단하게 API 기본 설명과 파라미터, 지원하는 OS, 예시 화면 갈무리를 출력하는 예제를 생각해 봅시다. 해당 API 코드 위에 주석 블록를 만들고 일반 텍스트로 기본 설명과 `@param` 태그로 파라미터 설명, `@os` 태그로 지원 OS, `@screenshot` 으로 예제 화면 갈무리 파일의 경로를 기술하도록 규칙을 정합니다. 소스 코드에는 대략 다음과 같이 작성합니다.

> 참고. 아래 소스 코드는 예시일 뿐이며, 실제 프로젝트에서 사용한 프로그래밍 언어가 아닙니다.

```
(**
  말로만 하지 말고, 코드로 보여 달라는 함수입니다.
  장황한 설명을 들었을 때 흔히 호출합니다.
  @param code 보여줄 코드입니다. Null이면 오류가 발생합니다.
  @os Android,iOS
  @screen assets/screenshot1.png
**)
function showMeTheCode code
    ...
end function
```

Null

Javadoc과 같은 문서화 도구를 사용해 본 사람에게는 익숙한 모양일 겁니다. 한 가지 다른 점은 주석 블록을 표기하는 방법입니다. 프로그래밍 언어에서 주석 블록은 흔히 `/* ... */` 로 표기하지만, 이 스크립트 언어에서는 색다르게 `(* ... *)` 를 사용합니다. 더불어 일반 주석이 아니라 API 정보를 담은 주석임을 나타내기 위해 주석 블록 문법에 별표를 하나 더 붙여서 `(** ... **)` 로 작성하기로 합니다. 따라서 여기서 만들 도구는 별표가 하나인 일반 주석 블록은 무시합니다. 이런 기본 문법에 맞춰 아래와 같이 어떤 정보를 어떻게 표현할지 하나하나 규칙을 정해보았습니다.

| 지시자 | 의미 | 콘텐츠 | 콘텐츠 분석 |
| --- | --- | --- | --- |
| (\*\* | API 코멘트 시작 | 여러 줄로 된 텍스트 | @없이 기술한 것은 일반 설명문으로 인식하고 @가 있는 것은 아래의 지시자에 따름 |
| \*), \*\*) | API 코멘트 끝 | 없음 | 없음 |
| @os | 지원하는 OS 목록 | {os\_name}\[, {os\_name}\] | 콤마(,)를 구분자로 사용해 지원 OS를 나열(태그 복수 사용 가능) |
| @param | 파라미터 설명 | {name} 설명 (javadoc style) | 공백을 기준으로 첫 번째 나오는 단어를 파라미터 이름으로, 그 이후 텍스트를 파라미터 설명으로 인식(태그 복수 사용 가능) |
| @screen | 예시 화면 갈무리 경로 | {file\_path} | 이미지 파일 경로. 하나만 기술할 수 있으며 소스 파일 루트를 기준으로 상대 경로로 작성해야 함 |

`@param` 은 Javadoc과 같은 도구에서 지원하는 태그이니, 공백을 기준으로 이름과 설명을 구분하는 기존 방식을 따릅니다. 반면, `@os` 와 `@screen` 은 프로젝트에서 정의한 태그이니 내용도 자체적으로 정의합니다. API 문서를 제대로 만들려면 좀 더 많은 태그가 필요하지만 예제에선 여기까지만 정의하겠습니다. 이렇게 서술 규칙을 정의하고 실제 소스 코드에 적용하면 규칙에 따라 API 주석을 추출해 분석할 수 있습니다.

## 파서(parser) 사용자화

우선 소스 코드에서 API 설명이 담긴 주석 블록을 찾아낸 뒤 표에 정의한 규칙을 인식하는 것부터 시작합니다. 가능성을 확인하고자 Python으로 쭉 읽어서 처리해 봤는데요. 생각보다 작업이 단순해서 이렇게 쉬운 거라면 벌써 누군가가 만들어 놓았으리라는 생각이 들었습니다. 아니나 다를까, GitHub을 검색해보니 적용해 볼 만한 오픈소스 프로젝트가 보였습니다. 바로 [Parse comments](https://github.com/jonschlinkert/parse-comments) 입니다. Javascript 유형의 소스 코드에서 주석 블록을 추출하고, Javadoc과 JSDoc 형식의 태그를 분석해 JSON 객체로 만들어 주는 도구입니다. 애석하게도 주석 블록 표기법을 `/** ... */` 혹은 `/** ... **/` 로 고정했기에 그 부분을 살짝 손봐야 했습니다. 그렇다면 이왕 바꾸는 김에 고정된 주석 표기법을 쓰는 대신 임의로 주석 문법을 지정할 수 있게 수정하겠습니다. 필요한 작업은 두 가지입니다.

첫째, 주석 블록 표기법을 옵션으로 지정할 수 있도록 Parse comments를 업데이트할 것. 서너 줄만 수정하면 되므로 굳이 수정 내용을 쓰지 않고 저장소([https://github.com/lyingdragon/parse-comments](https://github.com/lyingdragon/parse-comments))로 갈음하겠습니다.

둘째, 새 스크립트에 맞는 주석 블록 문법으로 주석을 인식하는 추출기를 구현할 것. 입력받은 소스 코드의 어디에 API 코멘트가 있는지 판단해 Parse comments에 알려주는 것이 추출기입니다. `/**` 로 시작하는 주석을 추출하려면 Parse comments의 기본 추출기를 사용하면 되지만, 이 프로젝트는 `(**` 로 시작하는 주석을 추출해야 하므로 자체 추출기가 필요합니다.

> 참고. 얼핏 봐서는 `(**` 로 시작하는 주석을 인식하는 추출기만 만들면 될 것 같지만, Parse comments는 추출기가 알려준 내용이 정말 주석이 맞는지 한 번 더 검토하기 때문에 그 부분도 반드시 수정해야 합니다.

### 사용자 정의 추출기가 할 일

기존과 다른 문법의 주석을 인식할 수 있도록 자체 구현한 사용자 정의 추출기는 입력받은 소스 코드에서 `(**` 로 시작해 `*)` 로 끝나는 주석 블록을 찾아내 다음과 같은 객체를 만들어야 합니다.

| 이름 | 값 |
| --- | --- |
| type | 주석 블록이면 'CommentBlock', 인라인 코멘트이면 'CommentLine' |
| value | 주석에 담긴 문자열 `(**`, `**)` 제외 |
| range\[\] | 문자열 내 주석이 차지하는 부분. 문자열 내 주석 블록 시작점 인덱스와 끝점 인덱스를 배열로 입력 |
| loc{} | 문자열 내 주석 위치 줄/열 번호로 표현하는 객체 |
| loc.start{} | 문자열 내 주석 시작 위치. `(**` 포함 |
| loc.start.line | 문자열 내 주석 시작 위치의 줄 번호 |
| loc.start.column | 문자열 내 주석 시작 위치의 열 번호 |
| loc.end.line{} | 문자열 내 주석 끝 위치. `**)` 포함 |
| loc.end.line | 문자열 내 분석 대상 끝 위치의 줄 번호 |
| loc.end.column | 문자열 내 분석 대상 끝 위치의 열 번호 |

글 첫 머리에 나온 API 주석 예시에 적용하면 아래와 같은 위치 정보가 나옵니다. API 주석이 여러 개이므로 배열로 나타납니다.

```
[{
    type: 'CommentBlock',
    range: [ 0, 138 ],
    loc: {
        start: { line: 1, column: 1 },
        end: { line: 6, column: 3 }
    },
    value: '
' +
        '말로만 하지 말고, 코드로 보여 달라는 함수입니다.
' +
        '장황한 설명을 들었을 때 흔히 호출합니다.
' +
        '@param code 보여줄 코드입니다. Null이면 오류가 발생합니다.
' +
        '@os Android,iOS
' +
        '@screen assets/screenshot1.png',
}]
```

Null

`range` 나  `loc` 정보를 만드는 것이 약간 성가시지만, 정규식을 사용하면 주석 위치를 찾아내는 게 그리 어렵지 않습니다.

### 사용자 정의 추출기 적용하기

위에서 만든 추출기를 Parse comments와 결합해 API 코멘트를 분석할 때가 되었습니다. 우선 주석 블록 지시자를 옵션으로 지정하게 만든 Parse comments 수정본을 설치합니다.

Parse comments를 이용해 소스 코드를 입력받아 API 주석 정보를 출력하는 기능을 구현합니다. 간단하게 아래처럼 작성해 봤습니다.

**apidoc-generator.js**

```js
const Comments = require('parse-comments');
const fs = require("fs");
 
// 주석 지시자
const commentPrefix = '(**';
const commentSuffix = '*)';
 
// 사용자 정의 추출기. API 주석 정보가 담긴 객체의 배열을 반환한다. 내부적으로 commentPrefix와 commentSuffix를 사용하자.
const myExtractor =  function (str, options) {
    var comments = [];
    ... 생략 ([사용자 정의 추출기가 할 일]에서 설명한 작업을 수행
    return comments;
}
 
// Parse-comments 객체 생성. 옵션으로 사용자 정의 추출기와 주석 지시자를 입력한다.
var comments = new Comments({
    extractor: myExtractor,         // 사용자 정의 추출기 지정
    commentStart: commentPrefix,    // 주석 블록 시작 문자열
    commentEnd: commentSuffix}      // 주석 블록 끝 문자열
);
 
// 분석 결과 출력. test.source는 [주석 서술 규칙 정의]에서 예시로 사용한 주석과 코드
console.log(comments.parse(fs.readFileSync('test.source').toString('utf-8')));
```

JavaScript

실행하면 'test.source'의 주석을 분석한 결과가 출력됩니다.

```
{
    "apis": [
        {
            "type": "Block",
            "loc": {
                "start": { "line": 1, "column": 1 },
                "end": { "line": 6, "column": 2 }
            },
            "range": [ 0, 138 ],
            "raw": "
말로만 하지 말고, 코드로 보여 달라는 함수입니다.
장황한 설명을 들었을 때 흔히 호출합니다.
@param code 보여줄 코드입니다. Null이면 오류가 발생합니다.
@os Android,iOS
@screen assets/screenshot1.png",
            "code": {
                "context": {},
                "value": "function showMeTheCode code",
                "range": [ 139, 166 ],
                "loc": {
                    "start": { "line": 7, "column": 0 },
                    "end": { "line": 7, "column": 27 }
                }
            },
            "description": "말로만 하지 말고, 코드로 보여 달라는 함수입니다.
장황한 설명을 들었을 때 흔히 호출합니다.",
            "footer": "",
            "examples": [],
            "tags": [
                {
                    "title": "param",
                    "name": "code",
                    "description": "보여줄 코드입니다. Null이면 오류가 발생합니다.",
                    "type": null,
                    "inlineTags": []
                },
                {
                    "title": "os",
                    "name": "",
                    "description": "Android,iOS",
                    "inlineTags": []
                },
                {
                    "title": "screen",
                    "name": "",
                    "description": "assets/screenshot1.png",
                    "inlineTags": []
                }
            ],
            "inlineTags": []
        }
    ]
}
```

Null

보시다시피 구현한 부분이라곤 사용자 정의 추출기 몇 줄이 전부인데도 주석에 쓴 API 설명과 태그를 손쉽게 분석할 수 있습니다. 한 가지 아쉬운 점은, 12번째 줄에 나오는 `code.context` 가 비었다는 것입니다. 주석이 설명하는 함수 코드의 맥락을 담는 항목인데 맥락 분석에 실패했기 때문입니다. `code.value` 에 "function showMeTheCode code"라는 값이 있으므로 어떤 함수의 설명인지 알 수는 있지만, 영 마음이 불편합니다. 조금 귀찮더라도 문서화할 때 데이터를 다루기 쉽도록  `code.value` 를 "function", "showMeTheCode(함수명)"와 "code(파라미터명)"를 분리해  `code.context` 에 담아보겠습니다.

> 참고. Javascript 문법이라면 Parse comments가 알아서 code.context를 채워 넣습니다. 지금 저 값이 비어있는 것은 프로젝트에서 사용하는 스크립트가 Javascript 문법과 다르기 때문입니다.

`code.value` 를 공백으로 분리해  `code.context` 를 채우는 함수를 만듭니다. 간단한 문자열 파싱이므로 코드는 생략하겠습니다. 이렇게 만든 함수를 Parse comments를 생성할 때  `preprocess` 로 옵션으로 지정하면, 주석을 분석하기 전에 함수를 실행합니다.

**api-generator.js**

다시 실행하면 분석된 함수 맥락이 `code.context` 에 포함된 것을 볼 수 있습니다.

```
...상략
            "code": {
                "context": {
                    "type": "function",
                    "name": "showMeTheCode",
                    "args": "code"
                },
                "value": "function showMeTheCode code",
                "range": [
                    139,
                    166
                ],
...하략
```

Null

오픈소스를 사용한 덕분에 시간을 많이 들이지 않고도 자체 문서화 도구가 없는 프로그래밍 언어의 주석을 추출하고 분석하는 작업을 완수할 수 있었습니다. 이제 이 주석 정보를 이용해 문서를 만드는 일만 남았습니다.

## 주석 정보 문서화

> 참고. 의뢰 받은 프로젝트에서는 제가 즐겨 쓰는 [Pandoc](https://pandoc.org/) 을 이용해 문서화했지만, 이 글에서는 좀 더 많은 사람에게 익숙한  [Handlebars](https://handlebarsjs.com/) 를 사용하겠습니다.

출력할 문서의 레이아웃을 Handlebars 템플릿으로 만들어 봅시다. HTML을 사용할 수도 있지만, 요즘 기술 문서 작성 트렌드에 맞게 마크다운(Markdown)으로 예제 템플릿을 작성했습니다. 실제 프로젝트는 이보다 더 복잡하겠지만 여기서는 단순하게 API 이름과 설명, 화면 갈무리, 파라미터만 출력하겠습니다.

```
# API reference
 
## Summary
 
| API | Description |
|---|---|{{#each apis}}
|[\`{{this.code.context.name}}\`](#{{id this.code.context.name}}) | {{brief this.description}} | {{/each}}
 
{{#each apis}}
## {{this.code.context.name}} {{#if (getTagValue this.tags "title" "deprecated")}} <sup>Deprecated</sup>
 
> **Deprecated**
>
> {{lookup (getTagValue this.tags "title" "deprecated")}}
{{/if}}
 
> **Summary**
>
> **Script file:** test.script | **Supported:** {{#each (getTagValue this.tags "title" "os")}}{{this.description}}{{/each}}
 
## Overview
 
{{this.description}}
 
{{#each (getTagValue this.tags "title" "screen")}}
![]({{this.description}})
{{/each}}
 
## Parameters
 
| Name | Description | Type | Default |
|---|---|---|---|
{{#each (getTagValue this.tags "title" "param")}}
| \`{{this.name}}\` | {{this.description}}| {{this.type}} | |
{{/each}}
 
{{/each}}
```

Plain text

Parse comments가 만들어 준 JSON 객체를 Handlebars 템플릿으로 넘겨 마크다운 파일을 만들어 봅시다.

```js
...상략
const handlebars = require("handlebars");
const template = handlebars.compile(fs.readFileSync('apidoc.md.hbs', "utf8"));
fs.writeFileSync('out.md', template({apis: ast}));
```

JavaScript

이해를 돕기 위해 기본적인 코드만 작성했지만, 위에서 정의한 템플릿을 사용하려면 `brief`, `id`, `getTagValue ` 등 몇 가지 사용자 정의 헬퍼를 만들어야 합니다. 헬퍼가 있다는 가정하에 출력된 마크다운을 GitHub에서 렌더링하면 온라인 문서를 얻을 수 있습니다. 아래는 `showMeTheCode`  외에  `mycode` 라는 API를 하나 더 추가한 결과입니다.

![](https://engineering.linecorp.com/wp-content/uploads/2020/06/commentAnalyzer1.png)

결과물은 여느 API 레퍼런스 문서와 다르지 않습니다. 다만 Javadoc과 같은 도구와는 달리 미적 감각 충만한 테크니컬 라이터로서 종종 강조하는 '브랜딩을 담은 룩앤필'을 적용할 수 있습니다. 물론 프런트 엔드와 디자인 작업이 좀 더 필요하겠지만요.

## 앞으로는

작업을 모두 마친 뒤, '앞으로 어디에 활용하면 좋을까'하고 상상의 나래를 펼쳐봅니다. 이번 컨설팅에서는 API 문서화에 적용했지만, 실상 이 방법은 '프로그래밍 언어에 무관하게 소스 코드에서 주석 정보를 추출'하는 것이 요점입니다. 주석에 적힌 정보는 반드시 API 정보가 아니어도 좋습니다. 예를 들어 버전별 버그 픽스 정보를 주석에 넣는다면 따로 문서를 작성하지 않아도 주석을 추출해 버그 픽스 리포트를 만들 수 있습니다. 그렇게 되면 소스 코드 한 군데에서 기능과 문서를 관리하게 되므로 동기화에 유리한 것은 물론 Jenkins 등으로 자동화하기도 쉬우니 일석이조라고 할 수 있습니다. 이번 글에서 소개한 방식이 이런 작업에 유용한 까닭은, 이미 제공되는 API 문서화 도구에서 입력과 출력을 손보기보다는 사용자 정의 추출기와 템플릿을 만드는 쪽이 훨씬 시간이 덜 들기 때문입니다. 정말 그럴까요? 어디 한번 버그 픽스 리포트를 만들어 봅시다. 이 아이디어가 떠오르자마자 작성한 주석입니다.

```java
/**
  @version 1.0.0
  @bugfix 모바일 화면에서 버튼이 겹치는 문제 해결
  @issue MYISSUE-1000
**/
class DisplaySystem
 
/**
  @version 1.0.1
  @bugfix iOS xxx 버전에서 소리 재생 오류 해결
  @issue MYISSUE-1242
*/
public class SoundSystem
 
/**
  @version 1.0.1
  @bugfix Fetch 모듈 연산 오류 해결
  @issue MYISSUE-1243
*/
public class CoreSystem
```

Java

그런 다음 템플릿을 설계합니다. 템플릿 코드는 훨씬 간단해서 금방 작성할 수 있습니다. 버전별 주석을 모으는 헬퍼를 구현하는 데에만 약간의 시간이 필요합니다.

정말 순식간에 아래와 같은 버그 픽스 리포트를 만들 수 있습니다. 소스 코드만으로 모든 걸 해결하고 싶은 개발자에게 제법 유용한 활용처라 생각합니다.

![](https://engineering.linecorp.com/wp-content/uploads/2020/06/commentAnalyzer2.png)

그럼 테크니컬 라이터 입장에선 어떻게 더 활용할 수 있을까요? 작년에 쓴 포스트, [문서 엔지니어링과 API 문서화](https://engineering.linecorp.com/ko/blog/document-engineering-api-documentation/) 에서 제안한 솔루션을 다시 떠올려 봅니다. 포스트에서 제안한 내용을 요약하자면, '소스 코드가 없다면 자체 API 스펙을 정의하고 마크업으로 변환할 것, 소스 코드가 있다면 Doxygen을 통해 주석에 쓴 API 정보를 마크업 언어로 변환할 것'이었습니다. 최종 문서를 구성할 콘텐츠를 동일 유형으로 묶은 뒤 뷰(view)의 변화에 쉽게 대응하기 위해서입니다. 지난 포스팅에서 상세히 설명하지는 못했으나 소스 코드의 주석을 마크업으로 변환하는 과정은 꽤 번거롭습니다. 그런데 이번 프로젝트를 진행해 보니 그런 복잡한 단계를 건너뛰고 곧바로 소스 코드 주석을 API 스펙으로 직접 통합할 수 있겠더군요. 말하자면, Parse comments가 출력하는 결과물을 API 스펙의 뼈대로 사용하는 것입니다. 테크니컬 라이터이자 문서 엔지니어로서 저의 다음 계획은, 아래 화면처럼 API 주석 정보를 [strapi](https://strapi.io/) 와 같은 headless CMS(content management system)에 저장해 공통으로 사용할 수 있는 API 스펙을 만들고 프런트 엔드의 자율성을 한층 끌어올리는 것입니다.

![](https://engineering.linecorp.com/wp-content/uploads/2020/06/commentAnalyzer3.png)

재미있는 결과를 얻어 다시 한 번 이곳에 공유할 수 있기를 바라면서 글을 마무리 짓습니다.