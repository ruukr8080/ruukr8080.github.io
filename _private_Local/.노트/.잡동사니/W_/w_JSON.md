---
title: json
type: word
tags: [word]
---
# JSON이란?
( JavaScript Object Notation )
- 직역하면 자바스크립트 객체 표기법(또는 표현식)
- 데이터를 저장하거나 교환할 때 씀.

> Json 자체는 일종의 데이터 포맷일 뿐이다. 통신방법도 없고 프로그래밍 문법도 단순히 데이터를 표시하는 표현방법일 뿐.
> `텍스트 기반`이기 때문에 사람과 기계 모두 이해하기 쉽고 용량도 작아서 개꿀임.


   

---

#### 형태
key-value가 한 쌍으로 이루어진 형태의 객체(데이터)다.
> Key와 Value 사이에는 콜론`:`이 들어간다.

객체를 여러개 나열 할 수도 있다.
> 객체와 객체 사이에 쉽표`,` 하나 찍어주면 된다.

```js
//basic
{ key : value }
//object 여러개 나열
{ key : value , key2 :value2 }
```

##### 객체 안에 객체
객체의 값을 객체로 넣을 수 있다.
> 값으로 들어가는 객체는 중괄호`{ }`로 묶어서 표현한다.

```js
//obj in obj
{ key : { inKey : inValue }}

//obj in obj , obj in obj
{ key : { inKey : inValue }, key2 : { inKey : inValue }}

```

##### 객체 안에 배열
배열 또한 객체이기 때문에 배열객체(array)를 값으로 넣을 수 있다.
> 값으로 들어가는 배열은 대괄호 `[]`로 묶어서 표한한다. 

```js
//obj in array
{ key : ["val","val2","val3"] }
```
---

#### Type
데이터의 값에 타입을 지정해줄 수 있다.

```js
[   1,    "str",    true,    {inKey : "value"},    ["일", "이"],    null    ]
//숫자 (number)
{  k  :  1  }
//문자열 (string)
{  k  :  "str"  }
//불리언(boolean)
{  k  :  true  }
//객체(object)
{  k  :  {inKey : "value" }  }
//배열(array)
{  k  :  ["일", "이"]  }
//널(NULL)
{  k  :  null  }
```

---

## Json 함수
JavaScript에서 제공해주는 json 관련 함수를 써야한다.

#### JSON.parse()
JSON 문자열을 JavaScript 객체로 변환
```js
const jsonString = '{"name":"김철수","age":25}';
const obj = JSON.parse(jsonString);
// 결과: { name: "김철수", age: 25 }
```

#### JSON.stringify()
JavaScript 객체를 JSON 문자열로 변환 
> `+ 필터링,들여쓰기`

```js
const obj = { name: "김철수", age: 25 };
const jsonString = JSON.stringify(obj);
// 결과: '{"name":"김철수","age":25}'

// 두 번째 매개변수: replacer (필터링/변환)
const obj = { name: "김철수", age: 25, password: "1234" };
const filtered = JSON.stringify(obj, ["name", "age"]);
// 결과: '{"name":"김철수","age":25}'

// 세 번째 매개변수: space (들여쓰기)
console.log(JSON.stringify(obj, null, 2));
// 결과:
// {
//   "name": "김철수",
//   "age": 25,
//   "password": "1234"
// }
```

---
## Json 함수 확장판
Json객체를 다루는 라이브러리들이 많이 있다.

- 검증 기능
    - Ajv (JS)
    - jsonschema (Python)
    - pydantic (Python)
    - javax.validation (Java)
    - FluentValidation (C#)
- 스키마 정의
    - TypeScript interfaces
    - Pydantic models
    - Java classes
    - C# classes
    - PHP classes
- 성능 최적화
    - simdjson (C++)
    - Oj (Ruby)
    - Gson (Java)
    - System.Text.Json (C#)
- 확장 기능
    - JSON5 (주석 지원)
    - JSONC (주석 지원)
    - YAML (JSON 호환)
    - MessagePack (이진 형식)

> [이 중에서 java 호환 라이브러리만 알아보자](###json.org)
---

### json.org (Java Json-library)
> Java json 라이브러리이다.

- 주요 기능
    - API 응답 처리
    - 설정 파일 관리
    - 데이터 직렬화/역직렬화
    - 데이터 변환 및 포맷팅
    - 웹 서비스 통신

#### JSONObject 기본 함수
```java
JSONObject obj = new JSONObject();

// 데이터 추가
obj.put("name", "김철수");
obj.put("age", 25);

// 데이터 가져오기 (없으면 JSONException 발생)
String name = obj.getString("name");
int age = obj.getInt("age");
double height = obj.getDouble("height");
boolean isStudent = obj.getBoolean("isStudent");
JSONObject address = obj.getJSONObject("address");
JSONArray hobbies = obj.getJSONArray("hobbies");

// 옵셔널 데이터 가져오기 (없어도 기본값 반환)
String name = obj.optString("name", "무명");
int age = obj.optInt("age", 0);
double height = obj.optDouble("height", 170.0);
boolean isStudent = obj.optBoolean("isStudent", false);
JSONObject address = obj.optJSONObject("address");
JSONArray hobbies = obj.optJSONArray("hobbies");
```

#### JSONArray 
```java
JSONArray array = new JSONArray();

// 데이터 추가
array.put("값1");
array.put(123);
array.put(new JSONObject());

// 특정 위치에 데이터 추가
array.put(1, "중간값");

// 데이터 가져오기
String value = array.getString(0);
int number = array.getInt(1);
JSONObject obj = array.getJSONObject(2);

// 옵셔널 데이터 가져오기
String value = array.optString(0, "기본값");
int number = array.optInt(1, 0);
JSONObject obj = array.optJSONObject(2);

// 길이 확인
int length = array.length();

// 특정 값 포함 여부 확인
boolean contains = array.toString().contains("값1");
```


#### JSON-util
```java
// 문자열로 변환
String jsonString = obj.toString();
String prettyJson = obj.toString(2);  // 들여쓰기 포함

// 키 존재 여부 확인
boolean hasKey = obj.has("name");

// null 여부 확인
boolean isNull = obj.isNull("name");

// 키 목록 가져오기
Iterator<String> keys = obj.keys();

// 모든 키 배열로 가져오기
JSONArray keyArray = obj.names();

// 특정 키 제거
obj.remove("name");
```
#### json-parsing
```java
// 문자열에서 파싱
String jsonStr = "{\"name\":\"김철수\",\"age\":25}";
JSONObject obj = new JSONObject(jsonStr);

// Map에서 생성
Map<String, Object> map = new HashMap<>();
map.put("name", "김철수");
JSONObject fromMap = new JSONObject(map);

// 다른 JSONObject 복사
JSONObject copy = new JSONObject(obj);

// XML에서 변환
String xml = "<root><name>김철수</name></root>";
JSONObject fromXml = XML.toJSONObject(xml);
```
#### json-cookie
```java
// Cookie 문자열에서 JSONObject 생성
String cookieStr = "name=김철수; age=25";
JSONObject cookie = Cookie.toJSONObject(cookieStr);

// JSONObject에서 Cookie 문자열 생성
String cookieString = Cookie.toString(cookie);
```
#### Http
```java
javaCopy// HTTP 헤더 파싱
String headerStr = "Content-Type: application/json";
JSONObject headers = HTTP.toJSONObject(headerStr);

// JSONObject에서 HTTP 헤더 생성
String headerString = HTTP.toString(headers);
```

#### CDL(Comma Delimited List)
```java
javaCopy// CSV 형식 데이터 처리
String cdl = "Name,Age\n김철수,25\n이영희,30";
JSONArray array = CDL.toJSONArray(cdl);

// JSONArray를 CSV로 변환
String cdlString = CDL.toString(array);
```

#### 예외 처리
```java
javaCopytry {
    JSONObject obj = new JSONObject(jsonStr);
    String name = obj.getString("nonexistent");
} catch (JSONException e) {
    // JSON 파싱 에러 또는 키가 없는 경우
    e.printStackTrace();
}
```


#### Property 
```java
javaCopy// Properties에서 JSONObject 생성
Properties props = new Properties();
props.setProperty("name", "김철수");
JSONObject fromProps = Property.toJSONObject(props);

// JSONObject에서 Properties 생성
Properties properties = Property.toProperties(obj);
```

---
## REF

-[Microsoft Ignite](https://learn.microsoft.com/en-us/dotnet/api/org.json.jsonobject.optstring?view=net-android-34.0)
-[Json library 사용법(opt)](https://codechacha.com/ko/java-convert-object-to-json-and-write-to-file/)