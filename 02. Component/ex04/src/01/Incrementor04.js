import React, {useState} from "react";

// 함수형
export default function Incrementor04({begin, step}){

    // 배열을 리턴한 후, 해당 배열을 분해한 것
    // useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해줍니다.
    // 이 함수를 호출해주면 배열이 반환되는데요,
    // 여기서 첫 번째 원소는 현재 상태, 두번째 원소는 Setter 함수입니다.
    // now : 현재 리액트 돔에 있는 것
    // https://react.vlpt.us/basic/07-useState.html
    const [now, setter] = useState(begin);

    // 함수는 렌더 안쓴다고!!!!!!!!!!! by 용수같은 정대겸
    return (
        <div>
        <button onClick={function(e){ setter(now + step) }}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ now }</span>
            {' '}
            <button onClick={function(e){ setter(now - step) }}>
                <strong>-</strong>
            </button>
        </div>
    );
}