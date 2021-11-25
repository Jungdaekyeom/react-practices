import React, { createElement } from 'react';

export default function () {

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // 공백 처리 잘 할 것
    // : 만 쓰는 경우와, {' : '} 를 쓰는 경우,
    // 공백 처리가 가능
    return (
        <div>
            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
            {' : '}
            {('0' + minutes).slice(-2)}
            {' : '}
            {('0' + seconds).slice(-2)}
            {' '}
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    )
}