# YJK Forum, 간단한 게시판 프로젝트

## [🚀YJK Forum 방문하기](https://forum.youngjunkim.me)
<br>

# 📖 목차 
 - [개요](#개요) 
 - [개발 환경](#개발-환경)
 - [사용 기술](#사용-기술)
 - [E-R 다이어그램](#e-r-다이어그램)
 - [Api 명세서](#-api-명세서)
 - [프로젝트 목적](#프로젝트-목적)
 - [화면 구성](#화면-구성)
 -  [핵심 기능](#핵심-기능)
    - [로그인](#로그인)
    - [게시글 CRUD](#게시글-crud)

## 📃개요
**YJK Forum**은 프론트엔드, 백엔드 경험을 위해 개인적으로 제작한 간단한 게시판 웹 애플리케이션입니다.<br> 

## 개발 환경

![windows11](https://img.shields.io/badge/Windows11-black?style=flat&logo=windows11)&nbsp;![VisualStudioCode](https://img.shields.io/badge/VSCode-blue?style=flat&logo=VisualStudioCode)&nbsp;![github](https://img.shields.io/badge/github-606060?style=fat&logo=github)&nbsp;

 - Windows11
 - Visual Studio Code
 - GitHub

## 사용 기술 

![node.js](https://img.shields.io/badge/Node.js-18.14-339933?style=flat&logo=node.js)&nbsp;![express](https://img.shields.io/badge/express-grey?style=flat&logo=express)

![react](https://img.shields.io/badge/React-18.2-blue?style=flat&logo=react)&nbsp; ![tailwindcss](https://img.shields.io/badge/TailwindCSS-grey?style=flat&logo=tailwindcss)

![mysql](https://img.shields.io/badge/MySQL-grey?style=flat&logo=mysql)

![ec2](https://img.shields.io/badge/AWS-ec2-FF8C00?style=flat&logo=amazonec2)

**백엔드**
  - Node.js
  - Express

**프론트엔드**
  - React
  - TailwindCSS

**데이터베이스**
  - Mysql

**인프라** 
  - AWS EC2


## E-R 다이어그램
<img src="https://user-images.githubusercontent.com/114643395/232716479-9761efc7-88a9-498f-b34a-398600be9414.png" width="550" height="384"/>

## 📑 Api 명세서
<img width="893" alt="image" src="https://user-images.githubusercontent.com/114643395/233014799-612d1883-d650-4148-ad62-86418ad47d7b.png">

<br>

## 프로젝트 목적
프론트엔드부터 백엔드까지 웹 애플리케이션 제작의 전반적인 과정을 경험해보고 학습하는 것을 목표로 시작했습니다.<br>



## 화면 구성💻
|![첫페이지](https://user-images.githubusercontent.com/114643395/232729115-b68f19a7-7caa-4217-ab1f-4463c0b0095e.png)|![글쓰기](https://user-images.githubusercontent.com/114643395/232731380-fa67bd15-f490-4e4f-b7c9-0e3a9707c165.png)| ![로그인](https://user-images.githubusercontent.com/114643395/232729469-4b5cb023-90bd-4dc8-bea8-57403e438c13.png) | ![회원가입](https://user-images.githubusercontent.com/114643395/232729704-e5db6e9b-1576-47e3-8050-ab13df12e0c9.png) |
| :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: |
|                                                      첫 페이지                                                      |                                                       글쓰기                                                        |                                                      로그인                                                       |                                                     회원가입                                                      |

| ![게시판](https://user-images.githubusercontent.com/114643395/232729890-52042463-c683-403d-93ec-032e416c09ef.png) | ![게시글 보기](https://user-images.githubusercontent.com/114643395/232730215-66be0361-0aef-4dc0-a8c0-0a4f3b2efeaa.png) | ![마이페이지](https://user-images.githubusercontent.com/114643395/232730621-0fefcb72-ac6d-478c-b1f6-fd62435f0877.png) | ![관리페이지](https://user-images.githubusercontent.com/114643395/232730978-2dbc15c3-e168-45ba-9041-884202ffcb4b.png) |
| :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: |
|                                                      게시판                                                      |                                                       게시글 보기                                                        |                                                      마이페이지                                                        |                                                     관리페이지                                                      |


### 모바일 화면📱
| ![모바일 홈](https://user-images.githubusercontent.com/114643395/232934875-9bc102ce-3b13-4860-aa10-577ade97a9dc.jpg) | ![모바일 게시글](https://user-images.githubusercontent.com/114643395/232935492-04f55d3b-75fd-44d3-91e7-189540ba829f.jpg) | ![모바일 로그인](https://user-images.githubusercontent.com/114643395/232935553-f2a9273f-be2e-4b9c-934b-1d024f743963.jpg) | ![모바일 마이페이지](https://user-images.githubusercontent.com/114643395/232934914-d9448a5e-9e6a-4ba0-b2dc-d1f0cd815139.jpg) |
| :---------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------: |
|                                                      모바일 홈                                                       |                                                      모바일 게시글                                                       |                                                      모바일 로그인                                                       |                                                      모바일 마이페이지                                                       |                                                      관리페이지                                                       |

<br>

## 핵심 기능⭐
### 🌠회원관리

&ensp;&ensp;**회원가입** 
  - 회원가입시 비밀번호는 bcrypt를 이용하여 해시 암호화를 적용하고 해시값을 DB에 저장하였습니다.

&ensp;&ensp;**로그인**
  - 로그인 시도시 1차적으로 입력된 email로 회원이 존재하는지 확인합니다. 그 다음으로 email이 존재한다면 입력된 비밀번호와 DB에 저장된 회원정보의 비밀번호 해시값이랑 비교합니다.
  - 존재하는 email로 로그인을 시도하고 비밀번호가 일치한다면 JWT 토큰을 발행합니다. JWT 토큰은 브라우저의 localStorage에 저장되도록 하였습니다.
  - 모든 로그인이 필요한 기능들(글쓰기, 마이페이지 등)은 passport모듈에 JWT Strategy를 사용하여 Authorization 절차를 수행합니다.


### 🌠게시글 CRUD

&ensp;&ensp;**글작성**

<div align="center">
 <img src="https://user-images.githubusercontent.com/114643395/233254318-0941b2aa-d318-432a-8db3-01d17873dbec.gif"/>
</div>

- 글 작성은 로그인한 유저만 가능하도록 설정하였습니다.
- 로그인 되어있다면 글작성 페이지로 넘어가고 그렇지 않다면 로그인 페이지로 이동하도록 하였습니다.

&ensp;&ensp;**글 수정**

<div align="center">
<img src="https://user-images.githubusercontent.com/114643395/233255891-ea70a284-d4da-4751-9353-58781084bdbc.gif"/>
</div>

- 게시글의 수정은 글 작성자 본인만 가능하도록 하였습니다.
- 로그인 후 마이페이지로 이동하면 내가 쓴 글목록에서 "수정" 아이콘을 클릭하면 글 수정 페이지로 이동합니다. 본인이 작성한 글만 수정이 가능하기 때문에 수정페이지를 불러오기전에 JWT를 통해 검증하였습니다. 수정하려는 페이지의 작성자와 현재 로그인 유저를 비교하여 일치하는 경우에만 수정페이지로 이동합니다.

&ensp;&ensp;**글 삭제**

<div align="center">
<img src="https://user-images.githubusercontent.com/114643395/233255883-e0c5d3a3-cc7d-4ff0-af40-1551ff4708d9.gif"/>
</div>

- 게시글의 삭제는 글 작성자와 관리자가 가능하도록 하였습니다.
- 글 작성자는 마이페이지에서, 관리자는 관리페이지->유저페이지에서 글 목록 옆에 있는 '삭제'아이콘을 클릭하면 게시글이 삭제되도록 하였습니다.
- 삭제기능 또한 JWT를 통해 검증하였습니다. 해당 글의 작성자이거나 관리자일 경우에만 삭제가 되도록 하였습니다.

&ensp;&ensp;**게시글 읽기**

- 게시글은 로그인하지 않아도 모든 방문자가 읽기 가능하도록 하였습니다.
- 게시글의 조회수 중복 방지를 위하여 조회한 게시글은 쿠키에 추가해주었습니다. 쿠키의 만료일은 해당일의 24:00이기에 하루가 지났을시에는 쿠키는 만료되고 조회수가 다시 증가할 수 있도록 하였습니다.

## 느낀점
처음에는 조금 막막했지만 프로젝트 계획을 세우고, 막히는 부분은 공식 문서, 강의 그리고 스택 오버플로우를 참고하며 차근차근 개발해 나갔습니다. 그 결과, 배포까지 완료할 수 있었습니다. 전체적인 웹 개발 프로세스를 경험할 수 있는 정말 뜻깊은 프로젝트였습니다. 프로젝트를 끝까지 마무리하고 나니 나도 할 수 있겠다는 자신감을 얻게 된 동시에 아직 부족한 부분이 많기 때문에 더욱 열심히 해야겠다는 의지를 다지는 계기가 되었습니다.
