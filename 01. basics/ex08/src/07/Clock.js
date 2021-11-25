import React, { createElement } from 'react';

export default function () {

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const htmls = 
        "<span>" + 
        ('0' + hours).slice(-2)  + 
        " : " + 
        ('0' + minutes).slice(-2) + 
        " : " +
        ('0' + seconds).slice(-2)
        "</span>";

    // const o = {
    //     __html = htmls
    // };

    return (

        // HTML 태그를 동적으로 생성하여 JSX element의 특정 속성으로 추가하는 작업은 금지하고 있지만,
        // xss(Cross-Site-Scripting) 보호기능을 끄고 사용할 수 있다.

        <div dangerouslySetInnerHTML = { {__html:htmls} } />
    );
}