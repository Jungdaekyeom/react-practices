import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

import './assets/scss/App.scss';

// 통신
import dataOrijin from './assets/json/data.json'

export default function () {
  const [keyword, setKeyword] = useState('');
  const [data, setdata] = useState(dataOrijin);

  // 자식이 부모한테 알려주는 부분
  // 자식이 변하면, 부모한테 렌더링해줌
  const notifyKeywordChanged = (keyword) => {
    console.log(keyword);
    setKeyword(keyword);
  };

  const changeAdd = (fname, lname, email) => {
    console.log(fname, lname, email);
    var add = [{
      "no": 40,
      "firstName": fname,
      "lastName": lname,
      "email": email
    }]
    console.log(data);
    setdata(data.concat(add));
  }
 
  const changeDelete = (deleteEmail) => {
    console.log("부모쪽:", deleteEmail);
    setdata(data.filter(email => email.email !== deleteEmail));
  };
 
  // App.js가 갖고 있는 keyword를 양쪽에 동시에 떨어뜨려줌
  // SearchBar / Emaillist
  return (
    <div className={'App'}>
      <RegisterForm callback={changeAdd} />
      <SearchBar keyword={keyword} callback={notifyKeywordChanged} />
      <Emaillist keyword={keyword} emails={data} callback={changeDelete} />
    </div>
  )
}