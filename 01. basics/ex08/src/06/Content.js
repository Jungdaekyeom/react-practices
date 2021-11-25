import React, {Fragment} from 'react';
import Clock01 from './Clock01'
import Clock02 from './Clock02'

export default function() {    
    return (
        <Fragment>
            <p>{ `06. 특징3: JSX 표현식 표기법 {express} 과의 문제점 / 특징4: 공백` }</p>
            <Clock01 />
            <Clock02 />
        </Fragment>
    );
}