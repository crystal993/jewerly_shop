## 📝 Description

쥬얼리 상품 CRUD가 가능한 웹 애플리케이션입니다.

언어는 Typescript를 사용했고,
전역 상태 관리는 Redux-toolkit을 사용했습니다. 스타일 라이브러리는 Styled-components를 사용했습니다.

## 🛠️ Dev Tools

<img src="https://img.shields.io/badge/redux_toolkit-#A102CF?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">

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

<br>

## **📝 디렉토리 구조**

<details>
<summary>- 디렉토리 구조</summary>
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
|           📄Detail.tsx
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

</div>
</details>

<br>

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

<br>

## **Prettier, ESLint 규칙 **

##### prettier

##### ESLint

- </div>
  </details>

<br>
