import React, {useState} from 'react';

export default function ({ begin, step }) {
    const [stateVal, setVal] = useState(begin); // 배열을 리턴한 후, 배열을 분해한 것
    // const [stateStep] = useState(step);

    return (
        <div>
            <button onClick={(e) => {
                setVal(stateVal + step);
            }}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ stateVal }</span>
            {' '}
            <button onClick={(e) => {
                setVal(stateVal - step);
            }}>
                <strong>-</strong>
            </button>
        </div>
    );
}