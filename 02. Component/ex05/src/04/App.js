import React, { useState, useEffect, Fragment } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const getCurrentClockTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);

        return {
            hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2),
            minutes: minutes,
            seconds: seconds,
            session: hours >= 12 ? "pm" : "am"
        };
    }

    const [currentClockTime, setCurrentClockTime] = useState(getCurrentClockTime());
    // 카운트 추가
    // 평상시에는 문제 없이 1씩 올라갈 것이다.
    // but callback 함수에 넣어두게 되면(현재 useEffect 안에 포함)
    const [ticks, setTicks] = useState(0);

    // []필요
    // []가 없으면, setInterval이 계속 불린다.
    // 아래 함수로 확인
    useEffect(() => {
        console.log("setInterval called : 한번만 호출됨");
        setInterval(function () {
            setCurrentClockTime(getCurrentClockTime());
            setTicks(ticks + 1); // 한번만 증가
        }, 1000);
    }, []);

    // useEffect(() => {
    //     console.log("setInterval called : 계속 호출됨, 살려줘~~");
    //     setInterval(function () {
    //         setCurrentClockTime(getCurrentClockTime());
    //     }, 1000);
    // });

    // setTimeout의 경우, 타이머를 계속 켜 놓는게 아니므로 
    // 계속 호출되어도 상관없음.
    // useEffect(() => {
    //     console.log("setTimeout called");
    //     setTimeout(function () {
    //         setCurrentClockTime(getCurrentClockTime());
    //         setTicks(ticks + 1);
    //     }, 1000);
    // }, [currentClockTime]);

    return (
        <Fragment>
            <span>{ticks}</span>
            <Clock
                message={'ex05: useEffect Hook example'}
                hours={currentClockTime.hours}
                minutes={currentClockTime.minutes}
                seconds={currentClockTime.seconds} />
        </Fragment>
    )
}