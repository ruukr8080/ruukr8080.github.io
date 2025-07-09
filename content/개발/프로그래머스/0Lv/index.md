---
title: 0Lv
types: 'index'
---

>[!Example]- 문자열 출력하기
>
>### **JavaScript**
>
>_⏰20 min_ | [[수치코테#Functions|Readline]]
>
> ```js
> const readline = require("readline")
> const rl = readline.createInterface({
>   input: process.stdin,
>   output: process.stdout,
> })
> let input = []
> rl.on("line", function (line) {
>   input = [line]
>   str = input[0]
>   console.log(str)
> }).on("close", function () {
>   str = input[0]
> })
> ```
>
>### **JAVA**
>
>_⏰30 sec_ | [[수치코테#Functions|Scanner]]
>
> ```java
> import java.util.Scanner;
>
> public class Solution {
> public static void main(String[] args) {
> Scanner sc = new Scanner(System.in);
> String a = sc.next();
> System.out.println(a);
> String s = "HelloWorld!";
> 	}
> }
> ```

>[!Example]- a와 b 출력하기
>
>### **JavaScript**
>
>_⏰15 min_ | [[수치코테#Functions|line.split(' ')]]
>
> ```js
> const readline = require("readline")
> const rl = readline.createInterface({
>   input: process.stdin,
>   output: process.stdout,
> })
>
> let input = []
>
> rl.on("line", function (line) {
>   input = line.split(" ")
> }).on("close", function () {
>   console.log("a = " + input[0] + " \n" + "b = " + input[1])
> })
> ```
>
>### **JAVA**
>
>_⏰1 min_
>
> ```java
> import java.util.Scanner;
>
> public class Solution {
> public static void main(String[] args) {
> Scanner sc = new Scanner(System.in);
> int a = sc.nextInt();
> int b = sc.nextInt();
>
>        System.out.println("a = "+a);
>        System.out.println("b = "+b);
>    }
> }
> ```

>[!Example]- 문자열 반복해서 출력하기
>
>### **JavaScript**
>
>_⏰10 min_ | [[수치코테#Functions|repeat(n)]]
>
> ```js
> const readline = require("readline")
> const rl = readline.createInterface({
>   input: process.stdin,
>   output: process.stdout,
> })
>
> let input = []
> let result = []
> rl.on("line", function (line) {
>   input = line.split(" ")
> }).on("close", function () {
>   str = input[0]
>   n = Number(input[1])
>   for (let i = 0; i < n; i++) {
>     result = result + str
>   }
>   console.log(result)
> })
> ```
>
>### **JAVA**
>
>_⏰1 min_ |
>
> ```java
> import java.util.Scanner;
>
> public class Solution {
> public static void main(String[] args) {
> Scanner sc = new Scanner(System.in);
> String str = sc.next();
> int n = sc.nextInt();
> for(int i=1; n>=i; i++){
> System.out.printf(str);
>
>       };
>
>   }
> }
> ```

>[!Example]- 특수문자 출력하기
>
>### **JavaScript**
>
>_⏰1 min_
>
> > ```js
> > console.log("!@#$%^&*(\\'\"<>?:;")
> > ```
>
>### **JAVA**
>
>_⏰1 min_
>
> > ```java
> > System.out.print("!@#$%^&*(\\'\"<>?:;");
> > ```

>[!Example]- 덧셈식 출력하기
>
>### **JavaScript**
>
>_⏰1 min_
>
> ```js
> console.log(`${Number(input[0])} + ${Number(input[1])} = ${Number(input[0]) + umber(input[1])}`)
> ```
>
>### **JAVA**
>
>⏰1 min\_
>
> ```java
> System.out.printf("%d + %d = %d",a,b,a+b);
> ```

>[!Example]- 문자열 붙여서 출력하기
>
>### **JavaScript**
>
>_⏰1 min_
>
> ```js
> str = str1 + str2
> console.log(str)
> ```
>
>### **JAVA**
>
>_⏰1 min_
>
> ```java
> System.out.printf("%s%s",a,b);
> ```

>[!Example]- 문자열 돌리기
>
>### **JavaScript**
>
>_⏰3 min_ |
>
> ```js
> for (let i in str) {
>   console.log(str[i])
> }
> ```
>
>### **JAVA**
>
>_⏰1 min_ |
>
> ```java
> for(int i=0; i<a.length(); i++){
>    System.out.println(a.charAt(i));
>     }
> ```

>[!Example]- 홀짝 구분하기
>
>### **JavaScript**
>
>_⏰1 min_ |
>
> ```js
> if (n % 2 === 0) {
>   console.log(`${n} is even`)
> } else {
>   console.log(`${n} is odd`)
> }
> ```
>
>### **JAVA**
>
>_⏰1 min_ |
>
> ```java
> if(n%2 == 0){
>     System.out.print(n+" is even");
> }else{
>     System.out.print(n+" is odd");
> }
> ```

>[!Example]- 문자열 겹쳐쓰기
>
>### **JavaScript**
>
>_⏰13 min_ | [[수치코테#Functions|join()]]
>
> ```js
> function solution(my_string, overwrite_string, s) {
>   var answer = []
>   for (let i = 0; i < my_string.length; i++) {
>     answer[i] = my_string[i]
>   }
>   for (let i = 0; i < overwrite_string.length; i++, s++) {
>     answer[s] = overwrite_string[i]
>   }
>   return answer.join("")
> }
> ```
>
>### **JAVA**
>
>_⏰5 min_ |
>
> ```java
> 	String answer = "";
> 	int mLeng= my_string.length();
> 	int oLeng= overwrite_string.length();
> 	String start = my_string.substring(0,s);
> 	String end = my_string.substring((s+oLeng), mLeng);
> 	return answer += start + overwrite_string + end;
> ```

>[!Example]- 문자열 섞기
>
>### **JavaScript**
>
>_⏰2 min_
>
> ```js
> for (i = 0; i < str1.length; i++) {
>   answer += str1[i] + str2[i]
> }
> ```
>
>### **JAVA**
>
>_⏰1 min_ | [[수치코테#Functions|String.valueOf()]]
>
> ```java
> for(int i =0; i< str1.length(); i++){
> answer += str1.charAt(i) + String.valueOf(str2.charAt(i));
> }
> ```

>[!Example]- 문자 리스트를 문자열로 변환하기
>
>### **JavaScript**
>
>_⏰1 min_
>
> ```js
> return arr.join("")
> ```
>
>### **JAVA**
>
>_⏰2 min_
>
> ```java
> for(int i =0; i<arr.length; i++){
> answer += arr[i];
> }
> return answer;
> ```

>[!Example]- 문자열 곱하기
>
>### **JavaScript**
>
>_⏰1 min_
>
> ```js
> function solution(my_string, k) {
>   return my_string.repeat(k)
> }
> ```
>
>### **JAVA**
>
>_⏰1 min_
>
> ```java
> class Solution {
>     public String solution(String my_string, int k) {
>     return my_string.repeat(k);
>  }
> }
> ```

>[!Example]- 더 크게 합치기
>
>### **JavaScript**
>
>_⏰1 min_ | [[수치코테#Functions|`🍎`]]
>
> ```js
> function solution(a, b) {
>   const ab = String(a) + String(b)
>   const ba = String(b) + String(a)
>   return ab >= ba ? parseInt(ab) : parseInt(ba)
> }
> ```
>
>### **JAVA**
>
>_⏰6 min_
>
> ```java
> class Solution {
> public int solution(int a, int b) {
> int ab = Integer.parseInt(Integer.toString(a) + Integer.toString(b));
> int ba = Integer.parseInt(Integer.toString(b) + Integer.toString(a));
> return ab >= ba ? ab : ba;
> }
> }
> ```

>[!Example]- 두 수의 연산값 비교하기
>
>### **JavaScript**
>
>_⏰3 min_
>
> ```js
> function solution(a, b) {
>   var ab = "" + a + b
>   var ba = 2 * a * b
>   return ab >= ba ? Number(ab) : Number(ba)
> }
> ```
>
>### **JAVA**
>
>_⏰1 min_
>
> ```java
> class Solution {
> public int solution(int a, int b) {
> int ab= Integer.parseInt(""+a+b);
> int ba= 2*a*b;
> return ab>=ba ? ab:ba ;
> }
> }
> ```

>[!Example]- 문자 리스트를 문자열로 변환하기
>
>### **JavaScript**
>
>_⏰1 min_
>
> ```js
> return arr.join("")
> ```
>
>### **JAVA**
>
>_⏰2 min_
>
> ```java
> for(int i =0; i<arr.length; i++){
> answer += arr[i];
> }
> return answer;
> ```

>[!Example]- n의 배수
>
>### **JavaScript**
>
>_⏰1 min_
>
> ```js
> function solution(num, n) {
>   return num % n === 0 ? 1 : 0
> }
> ```
>
>### **JAVA**
>
>_⏰1 min_
>
> ```java
> class Solution {
>    public int solution(int num, int n) {
>        return num%n == 0? 1:0;
>    }
> }
> ```

>[!Example]- 공배수
>
>### **JavaScript**
>
>_⏰5 min_
>
> ```js
> function solution(number, n, m) {
>   return number % n === 0 && number % m === 0 ? 1 : 0
> }
> ```
>
>### **JAVA**
>
>_⏰1 min_
>
> ```java
> class Solution {
>    public int solution(int number, int n, int m) {
>        return number%n == 0 && number%m == 0 ? 1:0;
>    }
> }
> ```

>[!Example]- 홀짝에 따라 다른 값 반환하기
>
>### **JavaScript**
>
>_⏰20 min_
>
> ```js
> function solution(n) {
>   let answer = 0
>   if (n % 2 !== 0) {
>     for (let i = 0; i <= n; i++) {
>       if (i % 2 !== 0) {
>         answer += i
>       }
>     }
>   } else {
>     for (let i = 0; i <= n; i++) {
>       if (i % 2 === 0) {
>         answer += i * i
>       }
>     }
>   }
>   return answer
> }
> ```
>
>### **JAVA**
>
>_⏰10 min_
>
> ```java
> class Solution {
> public int solution(int n) {
>  int answer = 0;
> if (n % 2 == 0) {
> for (int i = 0; i <= n; i += 2) {
>     answer += i * i;
> }
> } else {
> for (int i = 1; i <= n; i += 2) {
>     answer += i;
> }
> }
> return answer;
> }
> }
>
> ```
>
> **가독성 우선 풀이**
>
>조건문의 판별을 반복 수행함.
>
> ```java
>
> class Solution {
>  public int solution(int n) {
>       int answer = 0;
>           for(int i = n; i >= 0; i -= 2)
>               answer += (n % 2 == 0) ? i * i : i;
>       return answer;
> }
> }
> ```
>
> **효율성 우선 풀이**
>
>조건문의 판별을 1번만 수행함
>
> ```java
> class Solution {
> public int solution(int n) {
>  int answer = 0;
> if (n % 2 == 0) {
> for (int i = 0; i <= n; i += 2) {
>     answer += i * i;
> }
> } else {
> for (int i = 1; i <= n; i += 2) {
>     answer += i;
> }
> }
> return answer;
> }
> }
> ```

>[!Example]- 조건 문자열
>
>### **JavaScript**
>
>_⏰20 min_ |
>
> ```js
> function solution(ineq, eq, n, m) {
>   if (ineq === ">" && eq === "=") {
>     answer = n >= m ? 1 : 0
>   } else if (ineq === "<" && eq === "=") {
>     answer = n <= m ? 1 : 0
>   } else if (ineq === ">" && eq === "!") {
>     answer = n > m ? 1 : 0
>   } else if (ineq === "<" && eq === "!") {
>     answer = n < m ? 1 : 0
>   }
>   return answer
> }
> //자바 풀고 한 번 더 풀어봄
> function solution(ineq, eq, n, m) {
>   if (ineq === "<") {
>     return eq === "=" ? (n <= m ? 1 : 0) : n < m ? 1 : 0
>   } else {
>     return eq === "=" ? (n >= m ? 1 : 0) : n > m ? 1 : 0
>   }
> }
> ```
>
>### **JAVA**
>
>_⏰30 min_
>
> ```java
> class Solution {
> public int solution(String ineq, String eq, int n, int m) {
>   if(ineq.equals("<")) {
>      return eq.equals("=") ? (n<=m ? 1:0) : (n<m ? 1:0);
>   } else {
>      return eq.equals("=") ? (n>=m ? 1:0) : (n>m ? 1:0);
>   }
>  }
> }
> ```

>[!Example]- flag에 따라 다른 값 반환하기
>
>### **JavaScript**
>
>_⏰1 min_
>
> ```js
> function solution(a, b, flag) {
>   return flag ? a + b : a - b
> }
> ```
>
>### **JAVA**
>
>_⏰1 min_
>
> ```java
> class Solution {
>    public int solution(int a, int b, boolean flag) {
>        return (flag) ? a + b : a- b;
>    }
> }
> ```

>[!Example]- 주사위 게임 2
>
>### **JavaScript**
>
>_⏰42 min_
>
> ```js
> function solution(a, b, c) {
>   let x = a + b + c
>   let y = a ** 2 + b ** 2 + c ** 2
>   let z = a ** 3 + b ** 3 + c ** 3
>
>   let different = a !== b && b !== c && a !== c ? x : 0
>   let same = a + b - c === c ? z : 0
>
>   if (different) return x //다 다름
>   if (same) return x * z * y // 다 같음
>   return x * y // "하나 같음
> }
> ```
>
>### **JAVA**
>
>_⏰15 min_
>
> ```java
> class Solution {
> public int solution(int a, int b, int c) {
> int x = a+b+c;
> int y = (int)(Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2));
> int z = (int)(Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3));
>
> if(a!=b && b!=c && a!=c) return x;
> if(a+b-c == c) return x*z*y;
> return x*y;
> }
> }
> ```

>[!Example]- 원소들의 곱과 합
>
>### **JavaScript**
>
>_⏰21 min_
>
> ```js
> function solution(num_list) {
>   let asr = 1
>   let a = 0
>   for (var v of num_list) {
>     asr *= v
>     a += v
>   }
>   return asr < a * a ? 1 : 0
> }
> ```
>
>### **JAVA**
>
>_⏰3 min_
>
> ```java
> class Solution {
> public int solution(int[] num_list) {
>   int answer = 1;
>   int an = 0;
>   for(int i : num_list){
>       answer *= i;
>       an += i;
>   }
>   return answer < an*an ? 1:0 ;
> }
> }
> ```

>[!Example]- 이어 붙인 수
>
>### **JavaScript**
>
>_⏰40 min_
>
> ```js
> function solution(num_list) {
>   let odd = ""
>   let evn = ""
>   for (var a of num_list) {
>     a % 2 === 0 ? (odd += a) : (evn += a)
>   }
>   return Number(odd) + Number(evn)
> }
> ```
>
>### **JAVA**
>
>_⏰20 min_
>
> ```java
> class Solution {
>    public int solution(int[] num_list) {
>        String odd = "";
>        String evn = "";
>        for (int i = 0; i < num_list.length; i++) {
>            if (num_list[i] % 2 == 1) {
>                evn += Integer.toString(num_list[i]);
>         } else {
>                odd += Integer.toString(num_list[i]);
>            }
>        }
>        return Integer.parseInt(evn) + Integer.parseInt(odd);
>    }
> }
> ```

>[!Example]- 마지막 두 원소
>
>### **JavaScript**
>
>_⏰43 min_
>
> ```js
> function solution(num_list) {
>   let last = num_list.length - 1
>
>   num_list[last] > num_list[last - 1]
>     ? num_list.push(num_list[last] - num_list[last - 1])
>     : num_list.push(num_list[last] * 2)
>
>   return num_list
> }
> ```
>
>### **JAVA**
>
>_⏰15 min_
>
> ```java
>
> import java.util.*;
>
> class Solution {
> public List solution(int[] num_list) {
>  List< Integer > answer = new ArrayList<> ();
>    int front = num_list.length - 2;
>    int last = num_list.length - 1; 
>         for(int i=0; i<num_list.length; i++){
>             answer.add(num_list[i]);
>         }
>         if (num_list[last] > num_list[front]) {
>             answer.add(num_list[last]-(num_list[front]));
>         }else{
>             answer.add(num_list[last]*2);
>         }
>         return answer;
>     }
> }
> ```
>
>### **🤖GPT 풀이**
>
> ```java
> class Solution {
>    public int[] solution(int[] num_list) {
>        int[] result = new int[num_list.length + 1];
>        for (int i = 0; i < num_list.length; i++) result[i] = num_list[i];
>        result[num_list.length] = num_list[num_list.length - 1] > num_list[num_list.length - 2]
>            ? num_list[num_list.length - 1] - num_list[num_list.length - 2]
>            : num_list[num_list.length - 1] * 2;
>        return result;
>    }
> }
> ```
>
> **❗배열 index 접근 할 때 주의점.❗** 1. 배열의 범위(length) 확인. 자바에서 원시 일반 배열이라면 생성시에 배열 범위를 설정해줘야한다.  
>_예를 들어 배열을 복사하여 인덱스를 하나 추가할 거라면 `arr.length+1` 해줘야됨._ 2. 향상된 for문(iterator)은 인덱스의 값만 읽고 인덱스는 못읽음. 특정 인덱스에 값을 박아야하는 경우는 안쓰는게 좋음.
>
> ```java
> 	int[] result = new int[num_list.length +1];
> ```
>
> ```js
> let arr = [1, 2, 3]
> console.log(arr[10]) // undefined
> console.log(arr[-1]) // undefined
> console.log(arr[1.5]) // 2
> ```
>
> ```java
> 	int[] arr = {1,2,3};
> 	System.out.println(arr[10]); // ArrayIndexOutOfBoundsException
> 	System.out.println(arr[-1]); // ArrayIndexOutOfBoundsException
> 	System.out.println(arr[1.5]); // ArrayIndexOutOfBoundsException
> ```

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
