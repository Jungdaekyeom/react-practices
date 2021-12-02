import React, {useState} from "react";

export default function({begin, step}){

    const [now, setter] = useState(begin);
    // 리턴은 마지막에 세미콜론 잊지 마!

    return (
        <div>
            <button onClick={function(e){ setter(now + step) }}>
                +
            </button>
            <span>{now}</span>
            <button onClick={function(e){setter(now - step) }}>
                -
            </button>
        </div>
    );
}