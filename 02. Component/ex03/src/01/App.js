import React from 'react';

// cursor: 'pointer' => 해당 글자 위에 커서를 올리면 클릭 손 모양으로 바뀜
// onClick={function(e){console.log('click');}} => h1 태그 안에서 onClick 실행 시 콘솔로그 찍힘
// function(e) 를 람다 형식 (e) => 로 바꿈
export default function () {
    // const clickHandler = (e) => alert('click!!');

    return (
        <h1
            // onClick={clickHandler}
            onClick={(e) => { console.log('click'); }}
            style={{
                cursor: 'pointer'
            }}>
            ex03 - Inline Handler</h1>
    );
}