1. async / await
2. fetch : 
   - https://www.daleseo.com/js-window-fetch/
   - fetch 함수는 첫 번째 인자로 url, 두번째 인자로 옵션 객체를 받음
===========================================================
fetch(url, options)
  .then((response) => console.log("response:", response))
  .catch((error) => console.log("error:", error));
===========================================================
=========================================================== 
const response = await fetch('/api', {
    method:'get',
    header: {
        'Content-Type':'application/json',
    },
    redirect: 'error',
    referrer: 'client', 
    body = null
})
===========================================================
3. Clock
   - 클래스형의 LifeCycle과 함수형의 useState, useEffect
4. options
===========================================================
res.set('Access-Control-Allow-Origin', '*');
// res.set('Access-Control-Allow-Origin', 'http://localhost:9999'); //=> credentials:"include" 일 경우 '*' 설정 불가
res.set('Access-Control-Allow-Headers', req.get('Access-Control-Request-Headers'));
res.set('Access-Control-Allow-Method', req.get('Access-Control-Request-Methods')); // 네가 입력하는 method는 OK처리 해줄게 ㅎ
===========================================================
