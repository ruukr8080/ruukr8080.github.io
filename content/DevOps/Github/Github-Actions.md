---
title: Github Actions
type:
  - tech
tags:
  - tech
  - git 
---
## Github Actions 란

엔드투엔드 깃허브 중심 [SDLC](../../Devops/SDLC) 자동화 프로세스 :
'딸깍'하면 GitHub가 자동으로 첨부터 끝까지 다 해줌"


프로젝트를 체계적으로 관리할 수 있고 그 과정을 통합하고 자동화해주는 플랫폼과 프레임워크는 원래 있었다. ([Jenkins](../../Devops/Jenkins), [CircleCI](../../Devops/CircleCI), [Travis-CI](../../Devops/Travis-CI) 등..)
그리고 이런 툴로 SDLC 자동화를 구축 해주는건 국룰이었다.


2019년 깃헙에서도 SDLC 자동화를 지원해주는 `Github Actions`이 나왔다.

Github Actions를 쓰게 된다면 기존의 SDLC 툴과 달리 원격저장소와 완벽한 통합이 가능 하다는거다.
코드 저장소와 CI/CD가 같은 플랫폼에 있다보니 설정도 간단했고,
외에 GitHub의 형상관리 기능들(Issues, Projects, Security 등)을 활용할 수 있다는 것도 ㄹㅇ개꿀이다.
또한 Marketplace에서 다른 개발자들이 만든 Actions를 가져다 쓸 수 있어서
거의 모든 작업을 복붙 수준으로 구현할 수 있다.

예를 들어 AWS에 배포하고 싶다? -> 관련 Action 찾아서 쓰면 끝
Node.js 테스트하고 싶다? -> 테스트 Action 가져다 쓰면 끝!

이런 편의성 덕에 특히 작은 규모의 프로젝트나 오픈소스에서 아주 유용하게 쓰이고 있음.

---

#### Github Actions의 동작 과정

	1.이벤트 발생 : git push 하거나 풀리퀘스트 생성 
	2.Github가 `.github/workflows` 폴더를 뒤져서 해당 이벤트에 반응하도록 설정된 
	workflow 파일을 찾아냄
	3. `workflow` 에 정의 된 스크립트 실행


---

### workflow 란?


    자동화하고 싶은 작업의 절차이다.== pipeline
    그 절차를 작성해 놓은 실행파일이 workflowfile이다.

#### workflow 구성

	 job :
	- 실행할 작업 단위
    - 테스트, 빌드, 배포 등등 하고 싶은 일들을 job으로 정의
    - 여러 job은 기본적으로 병렬로 실행됨 (순서 정할 수도 있음)


	runner : 
	- job을 실행하는 서버
    - Github에서 제공하는 가상 머신
    - 각 job마다 깨끗한 새 환경에서 시작함


	step : 
	- job 안의 실제 실행 단계
    - 순차적으로 실행되는 명령어들
    - marketplace의 action을 가져다 쓰거나 직접 명령어를 실행할 수 있음

---
#### workflowfile 예시

```shell
on:
  push:              # 코드가 push될 때
    branches: [main]
  pull_request:      # PR이 생성될 때
    branches: [main]
  schedule:          # 정해진 시간에
    - cron: '0 0 * * *'
  workflow_dispatch: # 수동으로 실행할 때		

#event는 workflow의 실행 조건을 정의할 수 있다.
```

