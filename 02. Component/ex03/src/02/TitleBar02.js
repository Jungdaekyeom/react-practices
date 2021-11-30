import React from 'react';

export default function TitelBar02() {
    // 괄호 안의 e는 DOM 이벤트 객체가 아니라 Event 이벤트 객체
    // 버블링 막는 stop propagation 사용에 쓰임
    const onClickHandler = (e) => {
        console.log('TitleBar02 clicked');
    }

    return (
        <h1
            onClick = { onClickHandler }
            style={{cursor: 'pointer'}}>
            ex03 - Functional Event Handler(Functional Component)
        </h1>
    );
}