const App = function() {
    const app = document.createElement('h1');
    app.textContent = new Date().toUTCString();
    return app;
}

export { App }