---
title: '0Lv'
types: 'index'
---


## 코테 풀 때 자주 쓰는 문법, 함수 모음

#### JS

[Scanner](https://docs.oracle.com/javase/8/docs/api/?java/util/Scanner.html) ,[Readline](https://nodejs.org/docs/v22.11.0/api/readline.html#readline),  
[split(' ')](#),[repeat(n)](#문자열-반복해서-출력하기),[join()](#문자열-겹쳐-쓰기),[valueOf()](#문자열-섞기)

#### Java

[String.valueOf()](../../코테/0Lv/(#String.valueOf()))

---

>[!Danger]- `Readline` : 입출력 인터페이스
>
>#### 문자열 출력하기
>
> ```js
>
> ```

>[!Danger]- `split('')` : 구분자(delimiter)지정
>
> ```js
> let line = "안녕하세요 반갑습니다 ㄱ ㄴ"
> let result = line.split(" ")
> console.log(result) // ['안녕하세요', '반갑습니다', '좋은', '하루']
>
> // 쉼표로 구분
> let str1 = "사과,배,귤"
> console.log(str1.split(",")) // ['사과', '배', '귤']
>
> // 정규표현식 사용
> let str2 = "안녕    하세요    반갑습니다"
> console.log(str2.split(/\s+/)) // ['안녕', '하세요', '반갑습니다']
>
> // 빈 문자열로 분할하면 각 문자로 나눔
> let str3 = "Hello"
> console.log(str3.split("")) // ['H', 'e', 'l', 'l', 'o']
> ```

>[!Danger]- `repeat(n)` : 문자열을 n번 반복해서 새로운 문자열을 반환.
>
> ```js
>
> ```

>[!Danger]- `join("")` : 배열의 모든 요소를 하나의 문자열로 합쳐줌.  
>" " 안에 구분자 지정해줄 수 있음.
>
> ```js
> const arr = ["바람", "비", "물"]
> console.log(arr.join())
> // 바람,비,물
> console.log(arr.join(""))
> // 바람비물
> console.log(arr.join("-"))
> // 바람-비-물
> ```

>[!Danger]- `String.valueOf()` : ()안의 객체 String 타입으로 형변환시킴.
>
> - str1과 str2의 각 위치(i)의 문자를 charAt()으로 가져와 번갈아가며 추가함.
> - 문자열(String)과 문자(char)를 합치면 문자열이 나오지만. 문자(char)끼리 더하면 아스키코드 값으로 출력되므로  
>String.valueOf()를 통해 `str1`을 String으로 형변환 해서 원하는 문자열로 출력해냄.  
>^441b93

>[!Danger]- `parseInt(String)` : "" + int = String type으로 형변환됨.
>
> ```java
> int aLong = Integer.parseInt(""+a+b);
> ```
>
> ```js
>
> ```
