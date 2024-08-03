---
last_modified_at: 2024-07-28
no_link_title:    false
no_excerpt:       false
hide_image:       false
hide_title:       false

layout:           project
cover:            false
sidebar:          false
order:            0

image:
  path:           /assets/img/projects/EnigmaIDE/banner.png
  srcset:
    1920w:        /assets/img/projects/EnigmaIDE/banner@1x.png
    960w:         /assets/img/projects/EnigmaIDE/banner@0,5x.png
    480w:         /assets/img/projects/EnigmaIDE/banner@0,25x.png
caption:          '주요정보통신기반시설 취약점 분석·평가 가이드에 따른 CVE 프로그램'

title:            Kosain_CVE
date:             2024-08-02 12:10:00
description:      '주요정보통신기반시설 취약점 분석·평가 가이드에 따른 CVE 프로그램'
hide_description: true
featured:         false

links:
  - title:        Source
    url:          https://github.com/ruukr8080/EnigmaIDE/
---

---  

[주요정보통신기반시설 취약점 분석·평가 가이드](https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EC%A3%BC%EC%9A%94%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0%EA%B8%B0%EB%B0%98%EC%8B%9C%EC%84%A4%20%EC%B7%A8%EC%95%BD%EC%A0%90%20%EB%B6%84%EC%84%9D%C2%B7%ED%8F%89%EA%B0%80%20%EA%B8%B0%EC%A4%80)를 기반하여
SW 취약점(CCE,CVE,CWE)을 분석하고 스크립트를 작성하여 Exel,Web으로 표현하고 제공.

## Program Goals

### Goals1

- SW 인프라의 취약점을 파악,관리하자!

### Goals2

- 법령행정규칙에서 정한 가이드라인에따라 구축하기.
  - [정보통신기반 보호법_주요정보통신기반시설 취약점 분석·평가 기준](https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EC%A3%BC%EC%9A%94%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0%EA%B8%B0%EB%B0%98%EC%8B%9C%EC%84%A4%20%EC%B7%A8%EC%95%BD%EC%A0%90%20%EB%B6%84%EC%84%9D%C2%B7%ED%8F%89%EA%B0%80%20%EA%B8%B0%EC%A4%80)
  - [pdf-link](../_wikkis/myinfo/주요정보통신기반시설_기술적_취약점_분석_평가_방법_상세가이드.pdf)

## 취약점 분석, 평가의 범위 및 항목

### 분석ㆍ평가 대상 범위

 주요정보통신기반시설의 세부시설로 정의된 정보보호 대상 자산(정보시스템, 제어시스템)
  정보보호 대상 자산과 직ㆍ간접적으로 연계되어 기반시설에 영향을 미치는 타 시스템 등 물리적/관리적/기술적 분야
 > 연계된 타 시스템이란 내부 시스템과 외부 기관과의 연계전용망, 원격 접속을 위한 VPN 망, 인터넷 연결망 등의 접속구간과 정보시스템을 의미

- 분석ㆍ평가 항목
  o 취약점 분석ㆍ평가 기본항목은 ①관리적, ②물리적, ③기술적으로 구분
  - 기본항목은 3단계(상ㆍ중ㆍ하)로 중요도를 분리
  - 기본 항목의 중요도 "상"인 점검항목은 매년 1회 필수적으로 점검
  - 기본 항목의 중요도 "중", "하" 인 항목은 기관의 사정에 따라 선택 점검
    > 점검결과 사용되지 않거나, 불필요한 항목은 안전한 설정값 변환 등 보호대책 마련

위 기준 사항중 UNIX 서버 보안 취약점을 분석&평가 하고
  Exel로 산출한 뒤, Web으로 표현하는 프로그램임
    
---

## UNIX 서버 취약점 진단 항목

### 계정 관리

root 계정 원격 접속 제한 상 U-01
패스워드 복잡성 설정 상 U-02
계정 잠금 임계값 설정 상 U-03
패스워드 파일 보호 상 U-04
root 이외의 UID가 ‘0’금지 중 U-44
root 계정 su 제한 하 U-45
패스워드 최소 길이 설정 중 U-46
패스워드 최대 사용기간 설정 중 U-47
패스워드 최소 사용기간 설정 중 U-48
불필요한 계정 제거 하 U-49
관리자 그룹에 최소한의 계정 포함 하 U-50
계정이 존재하지 않는 GID 금지 하 U-51
동일한 UID 금지 중 U-52
사용자 shell 점검 하 U-53
Session Timeout 설정 하 U-54

### 파일 및 디렉토리 관리

root 홈, 패스 디렉터리 권한 및 패스 설정 상 U-05
파일 및 디렉터리 소유자 설정 상 U-06
/etc/passwd 파일 소유자 및 권한 설정 상 U-07
/etc/shadow 파일 소유자 및 권한 설정 상 U-08
/etc/hosts 파일 소유자 및 권한 설정 상 U-09
/etc/(x)inetd.conf 파일 소유자 및 권한 설정 상 U-10
/etc/syslog.conf 파일 소유자 및 권한 설정 상 U-11
/etc/services 파일 소유자 및 권한 설정 상 U-12
SUID, SGID, Sticky bit 설정 파일 점검 상 U-13
사용자, 시스템 시작파일 및 환경파일 소유자 및
권한 설정 상 U-14
world writable 파일 점검 상 U-15
/dev에 존재하지 않는 device 파일 점검 상 U-16
$HOME/.rhosts, hosts.equiv 사용 금지 상 U-17
접속 IP 및 포트 제한 상 U-18
hosts.lpd 파일 소유자 및 권한 설정 하 U-55
UMASK 설정 관리 중 U-56
홈디렉토리 소유자 및 권한 설정 중 U-57
홈디렉토리로 지정한 디렉토리의 존재 관리 중 U-58
숨겨진 파일 및 디렉토리 검색 및 제거 하 U-59

### 서비스 관리

finger 서비스 비활성화 상 U-19
Anonymous FTP 비활성화 상 U-20
r 계열 서비스 비활성화 상 U-21
cron 파일 소유자 및 권한설정 상 U-22
Dos 공격에 취약한 서비스 비활성화 상 U-23
NFS 서비스 비활성화 상 U-24
NFS 접근 통제 상 U-25
automountd 제거 상 U-26
RPC 서비스 확인 상 U-27
NIS, NIS+ 점검 상 U-28
tftp, talk 서비스 비활성화 상 U-29
Sendmail 버전 점검 상 U-30
스팸 메일 릴레이 제한 상 U-31
일반사용자의 Sendmail 실행 방지 상 U-32
DNS 보안 버전 패치 상 U-33
DNS Zone Transfer 설정 상 U-34
웹서비스 디렉토리 리스팅 제거 상 U-35
웹서비스 웹 프로세스 권한 제한 상 U-36
웹서비스 상위 디렉토리 접근 금지 상 U-37
웹서비스 불필요한 파일 제거 상 U-38
웹서비스 링크 사용 금지 상 U-39
웹서비스 파일 업로드 및 다운로드 제한 상 U-40
웹서비스 영역의 분리 상 U-41
ssh 원격접속 허용 중 U-60
ftp 서비스 확인 하 U-61
ftp 계정 shell 제한 중 U-62
Ftpusers 파일 소유자 및 권한 설정 하 U-63
Ftpusers 파일 설정 중 U-64
at 파일 소유자 및 권한 설정 중 U-65
SNMP 서비스 구동 점검 중 U-66
SNMP 서비스 커뮤니티스트링의 복잡성 설정 중 U-67
로그온 시 경고 메시지 제공 하 U-68
NFS 설정파일 접근 제한 중 U-69
expn, vrfy 명령어 제한 중 U-70
Apache 웹 서비스 정보 숨김 중 U-71

### 패치 관리

최신 보안패치 및 벤더 권고사항 적용 상 U-42

### 로그 관리

로그의 정기적 검토 및 보고 상 U-43
정책에 따른 시스템 로깅 설정 하 U-72

---

## 진단 스크립트

### Excel 결과물

### Web 결과물

---

## 차후 계획

- 자산별 상세 인벤토리 관리 솔루션 구축
- 차후 발표될 취약점 정보를 주기적으로 반영시켜 신규 취약점에 신속한 대응을 할 수 있게 관리할 것.
- 진단 결과에 따라 권고,조치,보고를 최종단계로 수렴하고 구축할것.

---

## 참고한 기업

### 해외 기업

#### 디자인 참고
- [Embedded Kit](https://theembeddedkit.io/) 깔끔 칙칙
- [Mageni](https://www.mageni.net/cve/docs) 깔끔 화사
- [Wazuh](https://wazuh.com/blog/detecting-xz-utils-vulnerability-cve-2024-3094-with-wazuh/
cve-scan-linux-vulnerability-scanner/)
- [미 국토부](https://cve.mitre.org/)

#### 시스템 아키텍쳐 참고
- [qualys](https://www.qualys.com/)
- [엔비디아](https://www.nvidia.com/en-us/ai-data-science/ai-workflows/security-vulnerability-analysis/)



### 국내
- https://www.kisa.or.kr/