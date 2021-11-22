import {myComponent} from './components/myComponent'
const App = function() {
    const app = document.createElement('h1');
    app.textContent = 'Hello World';
    return app;
}

export { App }