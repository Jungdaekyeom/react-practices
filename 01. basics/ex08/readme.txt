ex08: JSX Tutorial

01. 특징1: HTML과의 차이점
02. 특징2: Single Root node
03. JSX 함수 컴포넌트 만들기
04. Pure React(React API)로 함수 컴포넌트 작성하기
05. 클래스 컴포넌트 만들기
06. 특징3: JSX 표현식 표기법 {express} 과의 문제점 / 특징4: 공백
07. Dynamic HTML Rendering
08. Comment

설치:
$ npm i -D webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom

설정:
babel: babel.config.json
webpack: webpack.config.js

package.json에 스크립트 추가하기
  "scripts": {
    "start": "npx webpack serve --progress",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx webpack"
  },

실행
npm run debug src={01|02|03|04|...}