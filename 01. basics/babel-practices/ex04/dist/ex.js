// 블록 스코프 변수(ES6)
var users = [{
  no: 1,
  name: '정대겸',
  email: 'pocpoc0202@naver.com'
}, {
  no: 2,
  name: '김민철',
  email: 'mincyo2@naver.com'
}]; // 객체분해(ES6)

function print({
  no,
  name,
  email
}) {
  // 템플릿 문자열(es6)
  console.log(`${no},${name},${email}`);
}

; // for..of(ex6)

for (var user of users) {
  print(user);
}
