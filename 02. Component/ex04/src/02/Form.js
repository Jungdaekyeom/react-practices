import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesomeIcon 이 컴포넌트 - example
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'; // 아이콘들을 받아옴
import './assets/Form.css';

export default function Form() {
    // useState
    // const [now, set]  = useState("초기값")
    const [name, setName] = useState(""); // setName로 값이 넘어오면 name.
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [gender, setGender] = useState("female");
    const [birthYear, setBirthYear] = useState("1984");
    const [profile, setProfile] = useState("");
    const [agreeProv, setAgreeProv] = useState("no");

    // 제어 컴포넌트(Controlled Component)
    const onChangeInputName = (e) => {
        // setName(e.target.value);

        // 10자로 제한(validation) - substr
        setName(e.target.value.substr(0, 10));
    };

    const onChangeInputEmail = (e) => {
        setEmail(e.target.value);

        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
        setValidEmail(re.test(e.target.value));
    };

    const onChangeInputGender = (e) => {
        setGender(e.target.value);
    };

    const onChangeInputProv = (e) => {
        // 토글
        const status = e.target.value === 'no' ? 'yes' : 'no';

        // API 호출
        // const url = `prov/agree?status=${e.target.value === 'no'}`; 이런 식으로 사용
        // 통신할때
        // `prov/agree?status=${status}`; 이런 식으로 사용
        
        // API 호출
        const url = `/prov/agree?status=${status}`;
        console.log(url);
        if(true) {
            setAgreeProv(status);
        }
    }

    // 람다 <-> 일반식 연습용 자기소개 함수형태
    // const onChangeProfile = (e) => {
    const onChangeProfile = function(e){
        setProfile(e.target.value);
    }

    // value값을 { "" }로 지정하면 값을 넣을 수 없음(비제어) - value={ "" }
    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
            <label htmlFor="name">이름</label>
            <input
                id="name"   
                name="name"
                type="text"
                value={ name }
                onChange={ onChangeInputName } />

            <label htmlFor="email">이메일</label>
            <input                 
                id="email"   
                name="email"
                type="text"
                value={ email }
                onChange={ onChangeInputEmail } />
                {
                    email === '' ? 
                    null : 
                    validEmail ? 
                        <FontAwesomeIcon icon={ faCheckCircle } style={{marginLeft:5, fontSize:16, color:'blue'}}/> : 
                        <FontAwesomeIcon icon={ faTimesCircle } style={{marginLeft:5, fontSize:16, color:'red'}}/>
                }
            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" value={ "" } />

            <fieldset>
                <legend>성별</legend>
                <label>여</label> <input type="radio" name="gender" value={ "female" } onChange={onChangeInputGender} checked={gender === 'female'} defaultChecked={ true } />
                <label>남</label> <input type="radio" name="gender" value={ "male" } onChange={onChangeInputGender} checked={gender === 'male'} defaultChecked={ false } />
            </fieldset>

            <label htmlFor="birthYear">태어난 해?</label>
            <select id="birthYear" value={ birthYear } onChange={(e) => { setBirthYear(e.target.value) } }>
                <option value='1984'>1984년</option>
                <option value='1985'>1985년</option>
                <option value='1986'>1986년</option>
                <option value='1987'>1987년</option>
                <option value='1988'>1988년</option>
                <option value='1989'>1989년</option>
                <option value='1990'>1990년</option>
            </select>

            <label htmlFor="profile">자기소개</label>
            <textarea id="profile" value={profile} placeholder='자기소개를 입력하세요' onChange={onChangeProfile}/>

            <fieldset>
                <legend>약관동의</legend>
                <input id="agree-prov" type="checkbox" name="agreeProv" value= { agreeProv } checked={ agreeProv === 'yes' } 
                onChange={ onChangeInputProv } defaultChecked={ false } />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}