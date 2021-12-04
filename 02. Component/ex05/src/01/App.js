import React, {Fragment, useState} from 'react';
import LifeCycle from './LifeCycle';

export default function App() {
    const [color, setColor] = useState('');
    return (
        <Fragment>
            <h2>ex05 - Component LifeCycle</h2>
            {/* toString(16) : 16진수 */}
            <button
                onClick={() => setColor(`#${Math.floor((Math.random() * 0x00ffffff)).toString(16)}`)}>
                색상변경
            </button>
            <br/>
            {Math.floor((Math.random() * 0x00ffffff)).toString(16)}
            <LifeCycle color={color}/>
        </Fragment>
    );
}