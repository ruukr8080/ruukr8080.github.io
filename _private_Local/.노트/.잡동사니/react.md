---
title: react
type: word
tags: [word,react] 
---
#### 리액트 배우기 전 알아둘 키워드

- **User Interface(UI)** - 유저가 앱에서 어떻게 상호작용 하는지.
- **Routing** - 유저가 어떻게 리다이렉트 이동하는지.
- **Data Fetching** - 데이터가 있는 위치와 가져오는 방법
- **Rendering** - 언제 어디서 리소스들을 가져올지
- **Integrations** - 다른 서비스나 툴과 어떻게 연동시킬지. (CMS, 인증 , 결제 등.) 
- **Infrastructure** - CICD 어디서 할건지.
- **Performance** - 최적화 어떻게 할지
- **Scalability** - 트래픽이 증가하는 등. 확장이 필요할 때를 어떻게 대비할지


	애플리케이션의 각 부분에 대해 솔루션을 직접 구축할지 아니면 
	패키지, 라이브러리, 프레임워크와 같은 다른 도구를 사용할지 결정해야 한다.

---

## 목표

- 주로 사용하는 프로그래밍 언어,프레임워크가 아닌 기술을 사용해보며
프로그래밍에 대한 인사이트를 넓혀보자.

- 얕은 기술 체득은 덤

---


# Getting Started with React




새로 생성 된 프로젝트에서 리액트를 사용할거라면 [unpkg.com](https://unpkg.com/):
**react** 랑 **react-dom** 을 설치해야함.
>- react 는 리액트 코어 라이브러리임.
>- react-dom은 html 파일에서 리액트 쓰게 해줌.

```html
<html>
  <body>
   <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"> </script>
   <script type="text/javascript">
   const app = document.getElementById('app');
   const header = document.createElement('h1');
   const text = 'Develop. Preview. Ship.';
   const headerContent = document.createTextNode(text);
   header.appendChild(headerContent);
   app.appendChild(header);
   </script>
   </body>
</html>
```

---


## 실습 프로젝트
-[이미지 검색 사이트 만들기](https://github.com/ruukr8080/React-Basic)

---