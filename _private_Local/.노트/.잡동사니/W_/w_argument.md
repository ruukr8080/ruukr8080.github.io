---
title: argument
type: word
tags: [word]
---

# argument란?

- `argument` = 인자,인수


> 나는 그저 호출 된 `함수에 전달할 값`이라고만 여겼기 때문에 다 인자로 불렀었다. 
> 그러나 아무도 지적 해주지 않았다. 사실 둘 다 인자라고 불러도 틀린 말은 아니다.
> 그래도 정확히 알아보자.


---
### Argument와 Parameter

`parameter`와 비교하면 이해가 쉽다.

이 둘은 함수와 밀접하게 관련된 매우 중요한 개념이다.

- `parameter` : 함수를 `정의`할 때 `넘겨받은 값을 사용하기 위한`  `변수` 
- `argument` :  함수를 `호출`할 때 `넘기는 값`

```js
/* Javascript Code */
function plus (num1, num2) {
	return num1 + num2;
}
// num1과 num2는 parameter이다.

plus(10, 20);
// 10과 20은 argument이다.  

```

- 이 코드에서 plus 함수는 `num1`과 `num2`를 입력받고 입력받은 값을 더하고 return하는 함수이다.

> 여기서 첫번째 줄 `function plus()`를 선언할떄. 정의해 둔 변수 `num1`과 `num2`가 `Parameter`다.
> 그리고 밑에 `plus( )` 호출될 때 전달되는 실제 값이 `Argument`다.