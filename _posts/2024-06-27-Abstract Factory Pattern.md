---
layout: post
title: Gof Design Pattern- Creational_no.1
description: 생성 패턴_추상팩토리패턴
descript:
date: 2024-06-27 15:15
category: software
author: Han
tags: [디자인패턴, 팩토리 패턴]
summary: 
toc: true

---


# <span style='color:#A589F7'>Abstract Factory - 추상 팩토리 패턴 </span>
<br>
비슷한 속성의 객체들을 인터페이스로 규격화된 팩토리에서 일관된 방식으로 생성하고, 생성된 객체끼리는 쉽게 교체될 수 있도록 고안한 패턴이다. 
**추상 팩토리 패턴은 클라이언트가 타입을 정의하지 않고도** 서로 관련성이 있거나 독립적인 여러 객체의 군을 생성하기 위한 인터페이스를 제공한다.
 
예를들어 (**아이폰,갤럭시**)를 묶은 {**핸드폰**} 제품군이 있는데 이들을 또 **(애플,삼성)**제품군이냐에 따라 또 **(브랜드)**로 갈릴 때,
이 복잡한 제품군들의 설계를 관리와 확장하기 좋게 패턴화 

---
---



# <span style='color:#E7E1FF'>구조와 흐름</span>



![추상팩토리구조](/assets/img/design_pattern/추상팩토리구조.png)

- <span style='color:var(--mk-color-red)'>AbstractFactory</span> : 최상위 공장 클래스. 여러개의 제품들을 생성하는 여러 메소드들을 추상화 한다.
- <span style='color:var(--mk-color-red)'>ConcreteFactory</span> : 서브 공장 클래스들은 타입에 맞는 제품 객체를 반환하도록 메소드들을 재정의한다.

- <span style='color:var(--mk-color-orange)'>AbstractProduct</span> : 각 타입의 제품들을 추상화한 인터페이스
- <span style='color:var(--mk-color-orange)'>ConcreteProduct</span> (ProductA ~ ProductB) : 각 타입의 제품 구현체들. 이들은 팩토리 객체로부터 생성된다. 

- **Client** : Client는 추상화된 인터페이스만을 이용하여 제품을 받기 때문에, 구체적인 제품, 공장에 대해서는 모른다.


---
---



## class diagram (구조)

![추상팩토리클래스다이어그램](/assets/img/design_pattern/추상팩토리클래스다이어그램.png)



## sequence diagram (흐름)
![추상팩토리절차다이어그램](/assets/img/design_pattern/추상팩토리절차다이어그램.png)


---

# <span style='color:#E7E1FF'>Code</span>

#### Factory class

```java

interface AbstractFactory {
    AbstractProductA createProductA();
    AbstractProductB createProductB();
}

// Product A1와 B1 제품군을 생산하는 공장군 1 
class ConcreteFactory1 implements AbstractFactory {
    public AbstractProductA createProductA() {
        return new ConcreteProductA1();
    }
    public AbstractProductB createProductB() {
        return new ConcreteProductB1();
    }
}

// Product A2와 B2 제품군을 생산하는 공장군 2
class ConcreteFactory2 implements AbstractFactory {
    public AbstractProductA createProductA() {
        return new ConcreteProductA2();
    }
    public AbstractProductB createProductB() {
        return new ConcreteProductB2();
    }
}
```
#### Product class

```java
// Product A 제품군
interface AbstractProductA {
}
// Product A - 1
class ConcreteProductA1 implements AbstractProductA {
}
// Product A - 2
class ConcreteProductA2 implements AbstractProductA {
}

```

```java
// Product B 제품군
interface AbstractProductB {
}
// Product B - 1
class ConcreteProductB1 implements AbstractProductB {
}
// Product B - 2
class ConcreteProductB2 implements AbstractProductB {
}
```

```java
class Client {
    public static void main(String[] args) {
    	AbstractFactory factory = null;
        
        // 1. 공장군 1을 가동시킨다.
        factory = new ConcreteFactory1();

        // 2. 공장군 1을 통해 제품군 A1를 생성하도록 한다 (클라이언트는 구체적인 구현은
        // 알 필요 없고 인터페이스(factory)에 의존한다)
        AbstractProductA product_A1 = factory.createProductA();
        System.out.println(product_A1.getClass().getName()); 
        // ConcreteProductA1



        // 3. 공장군 2를 가동시킨다.
        factory = new ConcreteFactory2();

        // 4. 공장군 2를 통해 제품군 A2를 생성하도록 한다 (클라이언트는 구체적인 구현은
        // 알 필요 없고 인터페이스(factory)에 의존한다)
        AbstractProductA product_A2 = factory.createProductA();
        System.out.println(product_A2.getClass().getName()); 
        // ConcreteProductA2
    }
}
```
# <span style='color:#E7E1FF'>정리 </span>
### 패턴 사용 시기

- 관련 제품의 다양한 제품 군과 함께 작동해야 할때, 해당 제품의 구체적인 클래스에 의존하고 싶지 않은 경우
- 여러 제품군 중 하나를 선택해서 시스템을 설정해야하고 한 번 구성한 제품을 다른 것으로 대체할 수도 있을 때
- 제품에 대한 클래스 라이브러리를 제공하고, 그들의 구현이 아닌 인터페이스를 노출시키고 싶을 때

### 패턴 장점

- 객체를 생성하는 코드를 분리하여 클라이언트 코드와 결합도를 낮출 수 있다.
- 제품 군을 쉽게 대체 할 수 있다.
- 단일 책임 원칙 준수
- 개방 / 폐쇄 원칙 준수

### 패턴 단점

- 각 구현체마다 팩토리 객체들을 모두 구현해주어야 하기 때문에 객체가 늘어날때 마다 클래스가 증가하여 코드의 복잡성이 증가한다. (팩토리 패턴의 공통적인 문제점)
- 기존 추상 팩토리의 세부사항이 변경되면 모든 팩토리에 대한 수정이 필요해진다. 이는 추상 팩토리와 모든 서브클래스의 수정을 가져온다. 
- 새로운 종류의 제품을 지원하는 것이 어렵다. 새로운 제품이 추가되면 팩토리 구현 로직 자체를 변경해야한다.

---

>[!Tip]단점을 극복하는법 : `추상 팩토리 객체 싱글톤화`
>기본적으로 팩토리 클래스는 호출되면 객체를 생성하기만 하면 되기 때문에 메모리 최적화를 위해 각 팩토리 클래스마다 싱글톤 적용 하는 것이 좋다.

### <span style='color:#E7E1FF'>결론</span>
추상팩토리패턴은 클라이언트가 구체적인 타입을 명시하지않아도 코드의 확장성과 간결성을
보장하는  코드다.
**핵심**은 **제품군 집합**을 타입 별로 찍어낼수 있다는 점.





<script src="https://giscus.app/client.js"
        data-repo="ruukr8080/ruukr8080.github.io"
        data-repo-id="R_kgDOMLRatg"
        data-category="Announcements"
        data-category-id="DIC_kwDOMLRats4CgVMI"
        data-mapping="og:title"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="1"
        data-input-position="top"
        data-theme="dark"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>

