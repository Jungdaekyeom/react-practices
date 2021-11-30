import React, { useRef } from 'react';
import './assets/scss/App.scss';

export default function App() {
    const outterRef = useRef(null);
    const innerRef = useRef(null);

    // Array.from({length: 100} 유사배열. name같은거 더 추가하고 싶으면 해라
    // 결과 : 반복문 100개 나옴
    // 스크롤
    // 수업시간에 div안에 onScroll을 넣어서 잘못나옴
    return (
        <div
            ref={ outterRef }
            className={ 'App' }
            onScroll = { e => { console.log(outterRef.current.scrollTop, ':', outterRef.current.clientHeight + ':', innerRef.current.clientHeight)}}>
            <div
                ref={ innerRef }>
                <ul>
                    { Array.from({length: 100}, (e, i) => i + 1).map(i =>
                        <li key={i}>
                            { `아이템 ${i} 입니다.` }
                        </li>
                    ) }
                </ul>
            </div>
        </div>
    );
}