import React, { useState, useEffect } from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState('/');

    useEffect(() => {
        const handleHashChange = () => setRoute(window.location.hash.substr(1));

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (() => {
        switch (route) {
            case '/':
                return <Main />;
            case '/guestbook':
                return <Guestbook />;
            case '/gallery':
                return <Gallery />;
            default:
                return null;
        }
    })();
}




// return(()=>{})(); 구조 눈에 익히기
// return (<div>{`Hash Route 직접 만들어 보기:${route}`}</div>); // ${route} 값에 따라서 컴포넌트를 제각기 리턴해주면 됨
