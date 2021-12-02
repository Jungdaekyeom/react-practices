import React from 'react';
import './assets/Form.css';

// 비제어
export default function Form() {
    const onSubmit = (e) => {
        e.preventDefault();

        // 유효성 검사(Validation)가 필요 없을 때
        // validation이 딱히 필요 없을 때 사용하쟈 ㅎㅎ
        console.log(e.target.email.value, ':' , e.target.password.value);

        // ajax 로그인
    }

    return (
        <form
            id="loginForm"
            name="loginForm"
            method="post"
            action="/do/not/post">
            <label htmlFor="email">이메일</label>
            <input
                id="email"
                name="email"
                type="text" />

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" />

            <input type="submit" value="로그인" />
        </form>
    );
}