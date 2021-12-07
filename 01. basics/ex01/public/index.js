const App = function(){
    const app = document.createElement('h1');
    
    return app;
}

// document에서 id가 root인 애를 찾고, 그 밑의 자식에다가 App 함수를 추가하겠다.
document.getElementById('root').appendChild(App())
