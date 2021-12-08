## React Practices - Routing

### ex01: React Router Basic I: Implemented in a Simple Way(hashchange event driven)
### ex02: React Router Basic II: HTML5 history API
### ex03: React Router Basic III: HashRouter &amp; BrowserRouter*
### ex04: React Router Basic V: Link VS NavLink*
### ex05: Styling &amp; Semantic Markup
### ex06: Composition
### ex07: Nesting Routes-라우터 안의 라우터
### ex08: Using useRoutes
### ex09: BrowserRouter & SSR

### Install Dependency
1. react-router: 6.0.x(2021.6 beta)     : <Routes>, <Route>
2. react-router-dom: 6.0.x(2021.6 beta) : <HashRouter>, <BrowserRouter>

```bash
$ npm i react-router react-router-dom
```

### Run Examples
```bash
$ npm run dev [src=01|02|03|04|05|06|..]
```

---
## 수업
localhost:9999
localhost:9999/#/gallery
localhost:9999/#/guestbook



localhost:9999/#/gallery    (hash router)
localhost:9999/gallery      (browser router)

<a href='#/main'>main</a>
<a href='#/gallery'>gallery</a>
<a href='#/guestbook'>guestbook</a>

### react-router
1. HashRouter(Hash)
2. BrowserRouter(History API)
    url이 바뀐걸 내부적으로 알고, 컴포넌트만 바꾸는게 좋음