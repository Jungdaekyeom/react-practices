import React from 'react';

const App = function() {
    // const app = React.createElement('h1', null, '메롱');
    // return app;

    // 무조건 함수로 만들었을 땐, 렌더링 하는 부분을 만들어줘야 함
    const message = '집중해라';
    return (
        <div>
            <h1>{message + '    딸 사료값은 벌어야지     '}</h1>
            <h1>{`${message}    딸 사료값은 벌어야지     `}</h1>
        </div>
    );
}

export { App }