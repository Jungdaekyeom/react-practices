import React, {Fragment} from 'react';

import Incrementor01 from './Incrementor01';
import Incrementor02 from './Incrementor02';
import Incrementor03 from './Incrementor03';
import Incrementor04 from './Incrementor04';
import Incrementor05 from './Incrementor05';

export default function () {
    return (
        <Fragment>
            <h2>ex04 - 기본 개념</h2>
            <p></p>
            <Incrementor01 begin={1} step={1}/>
            <br/>
            <Incrementor02 begin={10} step={10}/>
            <br/>
            <p>정대겸이 만드는 새 Incrementor03</p>
            <Incrementor03 begin={1} step={3}/>
            <br/>
            <p>정대겸이 만드는 새 Incrementor04</p>
            <Incrementor04 begin={1} step={3}/>
            <br/>
            <p>정대겸이 혼자서 개고생하면서 만드는 새 Incrementor05</p>
            <Incrementor05 begin={1} step={3}/>
        </Fragment>
    );
}