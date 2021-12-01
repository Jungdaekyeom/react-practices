import React, { Fragment } from 'react';

import Header from './Header';
import Content from './Content';

export default function() {
    return (
        // <Fragment>
        //     <Header />
        //     <Content />
        // </Fragment>
        React.createElement(
            Fragment, 
            null, 
            React.createElement(Header, null), 
            React.createElement(Content, null)) // 객체를 넣어준것
        
        React.createElement(Fragment, null, Header(), Content()) // 함수 자체를 넣어준 것.
    )
}