const express = require('express');
const controller = require('../controllers/emaillist');

const router = express.Router();

// options 추가
// https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
router.route('').options((req, res, next) => {
    console.log('options request!!!');

    res.set('Access-Control-Allow-Origin', '*');
    // res.set('Access-Control-Allow-Origin', 'http://localhost:9999'); //=> credentials:"include" 일 경우 '*' 설정 불가
    res.set('Access-Control-Allow-Headers', req.get('Access-Control-Request-Headers'));
    res.set('Access-Control-Allow-Method', req.get('Access-Control-Request-Methods')); // 네가 입력하는 method는 OK처리 해줄게 ㅎ

    res.send();
});

router.route('').get(controller.readAll);
router.route('').post(controller.create);

module.exports = router;