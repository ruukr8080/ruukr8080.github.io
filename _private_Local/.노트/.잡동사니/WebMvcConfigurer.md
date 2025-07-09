---
title: WebMvcConfigurer
type: tech
tags: [tech,spring]
---

### WebMvcConfigurer

`나는 스프링으로 개발하면 습관적으로 이거 먼저 설정함.`

- [보일러플레이트](w_boilerplate) 없이 요구사항에 맞게 프레임워크를 조정할 수 있게 해줌.
- 특정한 스프링 클래스를 구현하거나 상속할 필요 없이 MVC 구성정보를 제어할 수 있게 해줌.
- @EnableWebMvc를 통해 활성화된 WebMVC App의 구성정보를 커스터마이징 하는 것을 돕기도 함.
- 스프링부트에 있는 기본설정이 맘에 안들거나 스프링에 추가적인 설정을 해줘야할 떄 쓴다.

**사용 예시**
- view resolver
- 인터셉터 등록
- resource handling
- message 반환
- Path Matching과 Content Negotiation
- CORS Configuration

### view resolver
- 컨트롤러에서 반환되는 뷰 이름이 실제 뷰 오브젝트로 변환되는 과정을 정의할 수 있다.
- 뷰가 리졸브드 되는 방식을 커스텀한 로직으로 변경 가능.
- ViewController만 일괄로 추가할 때
```java
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("home");
		registry.addViewController("/join").setViewName("join");
		registry.addViewController("/login").setViewName("login");
	}
}
```
### 인터셉터 등록
- request를 핸들링 하기 전 후로 처리할 작업이 있을때 이를 위한 커스텀 인터셉터를 구성하는 용도로 쓸 수 있다.
- ex) 글로벌 인터셉터를 등록하여 매번 로깅이나 보안검사를 할 수 있다. (시큐리티로 대체가능)


### resource handling
- html,js,image 와 같은 정적 리소스들을 어떻게 제어할지 구성할 수 있다.
- resource 경로를 설정해준다던가.
```java
@Override
public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry.addResourceHandler("/static/**")
            .addResourceLocations("classpath:/static/");
}
```
### message 반환
- HTTP 메세지 컨버터를 추가하여 JSON,XML 과 같은 형식의 데이터를 읽고 쓸 수 있는 메세지 변환기를 등록할 수 있다.
```java
@Override
public void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
    converters.add(new MyCustomMessageConverter());
}
```
### Path Matching과 Content Negotiation
- Path Matching rules 와 Content Negotiation options 를 구성할 수 있다.
```java
@Override
public void configurePathMatch(PathMatchConfigurer configurer) {
    configurer.setUseTrailingSlashMatch(true);
}

@Override
public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
    configurer.favorPathExtension(false)
              .favorParameter(true)
              .parameterName("mediaType")
              .ignoreAcceptHeader(true)
              .useRegisteredExtensionsOnly(false)
              .defaultContentType(MediaType.APPLICATION_JSON)
              .mediaType("xml", MediaType.APPLICATION_XML);
}
```
### CORS Configuration
>Cross-Origin Resource Sharing 교차 출처 리소스 공유 (뭔말이야) 교차 출처의 개념 > 다른 출처 -> 다른 출처와 리소스를 공유하는 것

여기서 말하는 출처는 
`Protocol + Host + Port number`
출처 내의 Port 번호는 생략이 가능하다. 80,443과 같이 http는 기본 port가 정의 되어있기 때문.

만약 port 번호까지 명시 되어 있는 경우는, 실제 Post 번호화 동일해야 같은 출처로 인정됨.

---



### Paging

##### Paging처리-Back
`PageAble` , `Page`
- Data JPA의 Paging처리 interface이다.

>자바 awt의 PagAble interface로 import하고 있어서 오류가 났었다.
service,WebConfig,Pagination 클래스들 import 확인하고 마지막으로 내가 만든 JPA Repository 인터페이스에서 `java awt`의 PageAble을 임포트 하고 있던 것을 확인.
등잔밑이 어두웠다.


[배워보자 Spring Data JPA](https://wonit.tistory.com/483#google_vignette)

---
##### Paging처리-Front
BoardList.vue 파일에서 `fnGetList`에 `pagination` 코드를 추가했다.

```js
// 수정 전
.then((res) => {
this.list = res.data.data})
```

```js
// 수정 후
.then((res) => {
if (res.data.["result_code"] === "OK"){
this.list = res.data.data
this.paging = res.data.["pagination"]
this.no = this.paging.total_list_cnt -
    ((this.paging.page - 1) * this.paging.page_size)
})
```

---

### Search

##### 게시글 가져오기
QueryDSL 추가.(spring 3.0, queryDslVersion 5.0)

> search api call-> data 찾음 ->  if(키값 대조해서  맞으면) {해당 정보 리스트에 담아 가져옴} -> if(null) {기본 리스트 반환}
    > `쿼리DSL로 작성된 쿼리문은 코드 레벨로 작성된거라 컴파일때 에러 찾아낼 수 있는게 개꿀이다.`
---

1. QueryDSL 라이브러리 의존성 추가.
    > - 그레들 최상단(plugins 위)에 QueryDsl버전 빌드스크립트 추가해줘야됨.buildscript{ (ext {queryDslVersion = "5.0.0"}}
    > - Qclass 저장할 패키지 경로,
    > - Qclass 생성할 패키지 경로.
    > - JAVAsourceSets에 Qclass 위치 알려주기.
  +- 그레이들 클린시 Qclass도 같이 없애기 설정 추가해줌.
이거 다 해주고 빌드 한번 해보면 gerrated 소스 폴더 하나 생기는데, 거기에 Entity에 등록해뒀던 필드,서비스들  QClass로 쫘라락 생김.
그리고 config 패키지 하위에 QueryDslConfig 클래스 생성하고 코끼리 또 빌드.


2. config 패키지에 하위에 QuerydslConfig 클래스 추가. (Repository에서 관리하게끔.)

    > 이제 클라보내는 검색조건(검색정보) 받아줄 모델이 필요함.
    > model 패키지 하위에 SearchCondition class 생성.

3. model 패키지 하위에 SearchConfition 클래스 추가.
    > QueryDSL의 Repository로 쓸 녀석이 필요함.
    > 기존엔 interface로 만들었지만
    > 얜 class 파일로 생성해서 JPAQueryFactory 가져와서 구현해야함.
    >entity 패키지 하위에 BoardRepositoryCustom 생성.
검색기능과 예외처리 2개 method 만들어준다.
JPAQueryFactory
PageImpl
BooleanExpression
StringUtils.hasLength()

4. entity 패키지 하위에 BoardRepositoryCustom 클래스 추가. 기존에 쓰던 @Repository는 별개로 냅두고, JPAQueryFactory를 구현시켜서 쓰자.


    >crud 뽑을 때 boardService에서 boardRepository를 통해 데이터를 가져왔던 것 처럼 search는 boardRepositoryCustom를 통해서 가져오면 된다.
    boardService에서 Header<> getBoardList()에 searchCondition을 추가해주자.그리고 BoardController 가서 searchCondition를 적절히 추가해준다.

```java
@Getmapping
Header<List<BoardDto>> getBoardList(){}
```

5. BoardService에 BoardRepositoryCustom 가져와서
   getBoardList에 searchConfition 추가해준다.
6. Front에서 BoardList.vue에서 태그,검색 조건, 검색 버튼 추가해준다.

ref : https://velog.io/@clickyour/SpringBoot-QueryDSL-%EC%82%AC%EC%9A%A9%EB%B2%95


