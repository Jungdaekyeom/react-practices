## React Pracractices - Integration(개발 환경 통합)

#### Configuration
1. Application(Project) Structure
   <pre>
   /app
    |--- /backend
    |       |--- /logging
    |       |       |--- index.js
    |       |--- /routes
    |       |       |--- [index.js]
    |       |       |--- authorized.js
    |       |       |--- error.js
    |       |--- /controllers
    |       |--- /models
    |       |--- /views
    |       |       |--- /error
    |       |               |--- [404.ejs]
    |       |               |--- [500.ejs]
    |       |--- /public
    |       |--- [index.js]
    |       |--- [app.config.env]    
    |--- /frontend
    |       |--- /config
    |       |       |--- babel.config.json
    |       |       |--- [webpack.config.json]
    |       |--- /public
    |       |       |--- favicon.ico
    |       |       |--- index.html
    |       |--- /src
    |       |--- /assets
    |--- /node_modules
    |--- package.json
    |--- package-lock.json
   </pre>
2. nodemon
3. webpack dev server
4. package.json
5. concurrently
6. node application

#### emaillist
    - 개발 통합 설정(with Node Backend)
    - backend: Fully APIs(Node Exporess기반)
    - Frontend: React(SPA)
    - AJAX: fetch 기반

#### cors(Cross Origin Resource Sharing)란?
=> 도메인 또는 포트가 다른 서버의 자원을 요청하는 매커니즘
https://velog.io/@wlsdud2194/cors
https://developer.mozilla.org/ko/docs/Web/HTTP/CORS

1. origin(출처)
   URL에서 protocol + host + port를 합친 것
   ```
   > location.origin
   < 'http://localhost:9999'
   ```

2. 같은 origin(출처) vs 다른 origin : XSS(Cross Site Script)의 위험이 있다.
3. Same origin Policy
   브라우저가 동일 출처 정책(SOP - Same-Origin Policy)을 지켜서 다른 출처의 리소스 접근을 금지
   - 외부 resource를 가져오지 못하는 단점이 있다.(상호작용하는 것을 제한)
   - XSS와 같은 보안 취약점을 사전에 방지할 수 있다.

4. CORS(Cross Origin Resource Sharing)
   ```
   Access to fetch at 'http://localhost:8888/api' from origin 'http://localhost:9999' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
   ```
   1. simple request
      <pre>
         JS             browser             server
            ----------->       ----------->
                                 Get /api

                               <-----------
                                 200 OK
                                 Access-Control-Allow-origin:* (헤더에 달림)
                                 ============body=============
                                 "{................}"

   response <-----------

      </pre>   

      조건:
      1) GET, HEAD, POST 중의 하나의 method를 쓰는 경우(현재 우리꺼가 해당되겠지?)
      2) Accept, Accept-Language, Content-Type 등의 헤더'만' 사용하는 경우
      3) Content-Type 헤더에 application/x-www-form-urlencoded, multipart/for-data, text/palin 인 경우

   2. preflight request
      <pre>
         JS             browser             server
            ----------->       ----------->
               fetch()         OPTIONS /api
                               Access-Control-Allow-Method : DELETE

                               <-----------
                                 200 OK
                                 Access-Control-Allow-origin:* (헤더에 달림)

                               ----------->
                                 GET /api
                               <-----------
                                 200 OK
                                 Access-Control-Allow-Origin:*
                                 cookies: .....
                                 ============body=============
                                 "{................}"

   response <-----------
      </pre> 