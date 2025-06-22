---
title: "기초"
tags: [ cote ]
---

❌
---

>>[!Example]- 문자열 반복해서 출력하기
>>### **JavaScript**
>>_⏰5 min_ | 
>>
>>>```js
>>>const readline = require('readline');
>>>const rl = readline.createInterface({
>>>input: process.stdin,
>>>output: process.stdout
>>>});
>>>
>>>let input = [];
>>>let result = [];
>>>rl.on('line', function (line) {
>>>input = line.split(' ');
>>>}).on('close', function () {
>>>str = input[0];
>>>n = Number(input[1]);
>>>for(let i = 0; i < n; i++){
>>>result = result+str
>>>}
>>>console.log(result);
>>>});
>>>```
>>
>>### **JAVA**
>>_⏰1 min_ |
>>
>>>  ```java
>>>
>>> >>>import java.util.Scanner;
>>>
>>>public class Solution {
>>>public static void main(String[] args) {
>>>Scanner sc = new Scanner(System.in);
>>>String str = sc.next();
>>>int n = sc.nextInt();
>>>for(int i=1; n>=i; i++){
>>>System.out.printf(str);
>>>
>>>        };
>>>
>>>    }
>>>}
>>>```
>
