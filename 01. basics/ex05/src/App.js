import React from 'react';

const App = function() {
    // const app = document.createElement('h1');
    // app.textContent = '쳐다보지마라 ㅋㅋㅋ';

    const app = React.createElement('h1', null, '메롱');
    return app;
}

export { App }