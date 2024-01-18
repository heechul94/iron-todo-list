## 개요

내일배움캠프 React 입문 개인과제 입니다.

JSX, state, props등 React 입문 강의를 듣고 활용하여 TodoList를 구현하는 과제입니다.

---

## 프로젝트 실행 방법

설치
`yarn install`

실행
`yarn start`

---

## 프로젝트 구조

<pre>
📦src
 ┣ 📂components
 ┃ ┣ 📂commons                   // 재사용되는 컴포넌트들이 있는 폴더입니다.
 ┃ ┃ ┣ 📂Buttons
 ┃ ┃ ┃ ┣ 📜DeleteButton.jsx
 ┃ ┃ ┃ ┗ 📜NormalButton.jsx
 ┃ ┃ ┣ 📂Cards
 ┃ ┃ ┃ ┗ 📜TodoCard.jsx
 ┃ ┃ ┣ 📂Inputs
 ┃ ┃ ┃ ┗ 📜NormalInput.jsx
 ┃ ┃ ┣ 📂Layout
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┗ 📜Layout.jsx
 ┃ ┃ ┗ 📂Styles                   // 컴포넌트들의 css파일을 모아 놓은 폴더입니다.
 ┃ ┃ ┃ ┣ 📜ButtonStyle.css
 ┃ ┃ ┃ ┣ 📜InputStyle.css
 ┃ ┃ ┃ ┣ 📜Layout.css
 ┃ ┃ ┃ ┣ 📜TodoCardStyle.css
 ┃ ┃ ┃ ┗ 📜TodoListStyle.css
 ┃ ┗ 📂units                      // 메인 기능의 컴포넌트, UI들이 있는 폴더입니다.
 ┃ ┃ ┗ 📂Todo                     // TodoList와 관련된 컴포넌트들이 있는 폴더입니다.
 ┃ ┃ ┃ ┣ 📜TodoListContainer.jsx
 ┃ ┃ ┃ ┗ 📜TodoListUI.jsx
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┣ 📜index.jsx
 ┗ 📜logo.svg
</pre>
