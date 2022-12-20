## 📝 Description

![image](https://user-images.githubusercontent.com/72599761/208735013-d434f903-1e63-48bd-a84f-327389c865d8.png)


쥬얼리 상품 CRUD가 가능한 웹 애플리케이션입니다.

언어는 Typescript를 사용했고,
전역 상태 관리는 Redux-toolkit을 사용했습니다. 스타일 라이브러리는 Styled-components를 사용했습니다.

## 🛠️ Dev Tools

<img src="https://img.shields.io/badge/redux_toolkit-A102CF?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">

<br>

## **🖥 프로젝트 실행 방법**

fake backend API로 json-server를 사용하고 있습니다.
JSON server를 실행하기 위해서 패키지 설치가 필요합니다.

## `yarn add global json-server`

src 폴더 안에 db.json이 있는 경우 src에서 아래의 명령어를 실행하면 됩니다. 없을 경우
json server 폴더로 가서 아래의 명령어를 실행

## `json-server -p 3001 db.json`

명령어를 입력하면 3001번 포트에서 fake Backend API가 실행됩니다.

### `yarn install`

### `yarn start`

<br><br>

## **📝 디렉토리 구조**

<details>
<summary>디렉토리 구조</summary>
<div markdown="1">

```
📂src
|   📄App.tsx
|   📄custom.d.ts
|   📄index.tsx
|
+---📂api
|       📄 ApiConfig.ts
|       📄 HttpService.ts
|       📄 ProductService.ts
|
+---📂assets
|   \---📂icons
|           📄 amondz_logo.jpg
|           📄 error_404_info.png
|
+---📂components
|   |   📄ToastifyConfig.ts
|   |
|   +---📂common
|   |       📄Header.tsx
|   |       📄Layout.tsx
|   |
|   +---📂elements
|   |       📄Button.tsx
|   |       📄Input.tsx
|   |
|   \---📂product
|           📄ProductCardList.tsx
|           📄ProductForm.tsx
|
+---📂hooks
+---📂pages
|   |   📄Main.tsx
|   |   📄NotFound.tsx
|   |
|   \---📂product
|           📄Posting.tsx
|
+---📂redux
|       📄hooks.ts
|       📄ProductSlice.ts
|       📄store.ts
|
+---📂router
|       📄Router.tsx
|
+---📂styles
|       📄globalStyle.ts
|       📄theme.ts
|
+---📂types
|       📄Product.type.ts
|       📄theme.d.ts
|
\---📂utils
|       📄convertAmount.js

```

#### 1. 📂 api 폴더
axios CRUD와 관련된 함수들을 추상화하여 관리 

#### 2. 📂 components 폴더
- elements : 자주 사용하는 Button, Input과 같은 재사용 빈도가 높은 컴포넌트들을 elements 폴더에서 관리
- common : Header, Layout과 같이 모든 페이지에서 동일하게 적용해야만 하는 컴포넌트들을 common 폴더에서 관리 
- products : product 데이터와 직접적으로 관련이 있는 컴포넌트들을 products 폴더에서 관리 

#### 3. 📂 components 폴더
- elements : 자주 사용하는 Button, Input과 같은 재사용 빈도가 높은 컴포넌트들을 elements 폴더에서 관리
- common : Header, Layout과 같이 모든 페이지에서 동일하게 적용해야만 하는 컴포넌트들을 common 폴더에서 관리 
- products : product 데이터와 직접적으로 관련이 있는 컴포넌트들을 products 폴더에서 관리 

#### 4. 📂 pages 폴더
어떤 모듈들이 결합되어 있는지 직관적으로 보여줄 수 있을만한 컴포넌트가 필요하다고 생각했습니다.  
모듈들의 결합 상태를 보여주는 컴포넌트만 관리하는 폴더 

#### 5. 📂 redux 폴더 
redux와 관련되어 있는 폴더 store와 slice 존재 

#### 6. 📂 router 폴더
react-router-dom 페이지 라우팅과 관련된 폴더

#### 7. 📂 styles 폴더
globalStyle 설정과 관련된 폴더 

#### 8. 📂 utils 폴더 
시간, 돈, 날짜 등과 관련된 함수들을 관리하는 폴더

</div>
</details>



<br><br>

## 🔒 커밋 규칙

<details>
<summary>커밋 규칙</summary>
<div markdown="1">

## **commit message 규칙**

⭐ feat : 새로운 기능에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 그 외 자잘한 수정에 대한 커밋

⚒ refactor :  코드 리팩토링에 대한 커밋

🎨 style : 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋

🚫 제목 끝에 마침표 금지
⚠ 무엇을 했는지 명확하게 작성

</div>
</details>

<br><br>

## **Prettier, ESLint 규칙 **

##### prettier

https://github.com/crystal993/jewerly_shop/blob/b9aea56b7c8edb7687d31e6825e335c743ab252f/.prettierrc.js#L1-L7

<br>

##### ESLint

https://github.com/crystal993/jewerly_shop/blob/b9aea56b7c8edb7687d31e6825e335c743ab252f/.eslintrc#L2-L8


<br><br>
