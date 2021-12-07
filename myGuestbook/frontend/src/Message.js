import React from 'react';
import PropTypes from 'prop-types';
import styles from './assets/scss/Message.scss';

// 데이터에 있는 개행 처리를 생각해야 한다.
// {message.replace("\n", "<br/>")} : 이런 식으로 하면 바람직하지 못하다.

// map 사용
// 아 배고프다.\n돈가스 땡김\n초밥 땡김\n치킨 땡김\nㅋㅋ 
// => ['아 배고프다.', '돈가스 땡김', '초밥 땡김', '치킨 땡김', 'ㅋㅋ']

// index가 0보다 크면, br(개행)을 붙이고 넘김
{/* <span>
    '아 배고프다.'
</span>
<span>
    <br/>
    '돈가스 땡김'
</span>
<span>
    <br/>
    '초밥 땡김'
</span>
... */}

export default function Message({no, name, message, notifyDeleteMessage}) {

    return (
        <li className={styles.Message}>
            <strong>{no} : {name}</strong>
            <p>
                {/* {message.replace("\n", "<br/>")} : 해당 br을 컴포넌트로 처리해야한다. */}
                {/* if/else 문으로도 만들어보기  */}
                {"A\nB\nC\nD".split('\n').map((line, index) => {
                    if(index != 0){
                        return (
                            <span key={`${index}`}>
                                <br/>
                                {index} : {line}
                            </span> )
                    } else {
                        return (
                            <span>
                                {index} : {line}
                            </span>
                        )
                    }}
                )}
                <br/>
                {
                    message && message.split('\n').map((line, index) => index > 0 ?  
                        <span key={`${index}`}>
                            <br/>
                            {index} : {line}
                        </span> : 
                        <span>
                            {index} : {line}
                        </span>
                )}
            </p>
            <strong/>
            {/* <a onClick={ notifyDeleteMessage(no) } >삭제</a> : 함수 정의를 바로 해버려서 수업시간에 문제생김*/}
            <a onClick={ () => notifyDeleteMessage(no) } >삭제</a>
        </li>
    );
}

// validation 검사
// no에 번호만 넣고
// name에 스트링만
// message에도 스트링만
Message.propTypes = {
    no: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}