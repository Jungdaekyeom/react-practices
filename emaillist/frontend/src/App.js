import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

import './assets/scss/App.scss';
// import data from './assets/json/data.json';

export default function() {
    const [emails, setEmails] = useState([]);
    const [keyword, setKeyword] = useState('');

    const notifyKeywordChanged = (keyword) => {
      setKeyword(keyword);
    };

    // 비동기
    // await, proxy
    // useEffect : 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 hook
    
    // cors error
    // Access to fetch at 'http://localhost:8888/api' from origin 'http://localhost:9999' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
    useEffect(async () => {
      try {
        // const response = await fetch('http://localhost:8888/api', { // 동일 오리진 정책 위배
        const response = await fetch('/api', {
          method: 'get',
          mode: 'cors',                   // no-cors, cors, same-origin*
          credentials: 'same-origin',            // include, omit, same-origin*  credentials : 인증에 필요한 토큰 전달에 쓰임. 
          // credentials: 'include',                // include일 경우, res.set('Access-Control-Allow-Origin', '*'); 에서 '*'(ALL)을 쓰지 못한다. 단 하나만 지정해야 한다. include => cookie와 관련됨. 이해못했음...ㅠ
          // 자격 증명(credentials)이 포함된 Request 요청
          // 자격 증명이 포함된 인증서를 보내도록 하려면 fetch() 메서드에 credentials: 'include'를 추가하도록 합니다.
          // 이것은 cross-origin 요청에서도 사용됩니다.
          cache: 'no-cache',                     // no-cache, reload, force-cache default* 
          headers: {
            'Content-Type': 'application/json',  // cf. application/x-www-form-urlencoded
            'Accept': 'application/json'         // cf. text/html             
          },
          redirect: 'error',                     // follow*, error, manual(response.url)
          referrer: 'client',                    // no-referrer, *client,                  referrer은 오타임ㅋ
          body: null
        });
        
        // response가 not OK면 throw로 던짐
        if(!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        const jsonResult = await response.json();

        if(jsonResult.result !== 'success') {
          throw new Error(`${jsonResult.result} ${jsonResult.message}`);
        }

        setEmails(jsonResult.data);

      } catch (err) {
        console.error(err);
      }
    }, []);

    return (
        <div className={'App'}>
          <RegisterForm />
          <SearchBar keyword={keyword} callback={notifyKeywordChanged} />
          <Emaillist keyword={keyword} emails={emails} />  
        </div>
    )
}