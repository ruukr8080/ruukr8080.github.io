---
title: Nest-Note
tags: framework, study
---
Nest.js 공식문서 번역, 정리

1. 소개 
# Intro
- Node.js의 백엔드 프레임워크.
- 프로그레시브 Javascript,Typescript 둘 다 지원.
- [OOP](w_OOP.md),[FP](w_FP.md),[FRP](w_FRP.md) 프레임워크.
- [Express](w_Express.md)를 기본으로 쓰지만 [Fastify](w_Fastify.md)로 설정해서 쓸 수 있음.
- Angular에서 영감을 받아 개발된 프렘웤
### Install
- 설치 방법 : Nest CLI , 스타터 프로젝트 클론 
- 기본 포트 3000
- npm이나 yarn을 이용해 깡통 플젝으로 설치하면 추가적인 설치과정이 필요함.

---

# 개요

### 이니셜라이징
- [바닐라JS] 쓸거면 [Babel] 컴파일러가 필요함.
- Node는 v13을 제외한 10.13.0 버전 이상이여야함.
- `$npm i g @nestjs/cli` `$nest new-project`

### 프로젝트 디렉토리 기본 구성
```shell
src
├─ app.controller.spec.ts
├─ app.controller.ts
├─ app.module.ts
├─ app.service.ts
└─ main.ts
```
- `controller.ts` ➡ 라우터
- `controller.spec.ts` ➡  controller.ts의 유닛테스트용 
- `module.ts` ➡ 앱 루트 모듈이 있는 파일.
- `service.ts` ➡ 서비스 로직 파일.
- `main.ts` ➡ 앱 구동파일 [NestFactory]로 써서 Nestapp 인스턴스 만듬.

🔽`main.ts` 내부 코드🔽

	- `@nestjs/core`에서 `NestFactory`클래스를 import 박아줘야한다.
	- `NestFactory` 클래스의 `create` 메서드로 `INestApplication` 구현체를 반환한다.


>Nest CLI를 통해 만들어진 프로젝트는 **각각의 모듈이 자신의 전용 디렉토리를 갖는** 구조로 만들어진다.

❓[w_INestApplication](w_INestApplication.md)❓  인바운드 HTTP 리스너 인터페이스임?

## 플랫폼 - ( default : express )

	Nest는 JVM처럼 플랫폼에 구애 받지 않는 프레임워크를 목표로 한다.
	어댑터만 있으면 node의 모든 HTTP 프레임워크와 호환한다. ( express , fasify)

## Controllers
![[Pasted image 20241112123244.png]]
- 요청 받을 컨트롤러는 [라우팅 매커니즘]이 정해줌. 
- 컨트롤러는 기본적으로 클래스와 데코레이터(e.g 소괄호`(arg)`)를 사용해서 만든다.


 데코레이터는 클래스에 필요한 메타데이터(경로 인자)를 넣어주고 Nest가 라우팅 맵을 만들게 함. 즉, 요청에 맞는 컨트롤러에 연결시켜줌.


- ❓라우팅 맵을 만들게 한다는게 걍 라우팅 한다라고 이해해도 아무 문제 없을까?
- 🚨여기서 말하는 메타데이터 생김새 찾아보기


### 라우팅 

1. 요청 - `@Get()`, `@Post()`, `@Put()`, `@Delete()`, `@Patch()`, `@Options()`, `@Head()`
2. 응답 - 
3. 와일드카드 
4. 상태 코드
5. 헤더
6. 리디렉션
7. 매개변수
8. 
```ts
// cats.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
@Get()
findAll(): string {
return '이 작업은 모든 고양이를 반환합니다';
}
}
```

- CLI로 컨트롤러 생성 가능. `$ nest g controller cats`
- **@Get( )** 으로 엔드포인트 **(요청메서드&라우트 경로)** 에 대한 핸들러를 따로 설정 가능. 
	- 요청 @Get('son') 예시 : 1. @Controller('cats')@Get() **or** Get('son')  => 요청 : `Get /cats/son`
	- 응답 핸들링 메서드 예시 : `findAll(@Res() response.status(200).send() ): `

❓

	라우팅 방식은 걍 스프링에 컨트롤러랑 똑같음.
	클래스 컨트롤러에 경로 넣고
	요청메서드(@GET,@POST ..) 설정해주면 됨. 위의 코드에서 이라 치면
	`Get /cats/son` 콜에 매핑됨.




