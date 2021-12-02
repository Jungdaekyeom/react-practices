import React from 'react';
import styles from './assets/scss/Email.scss';

// json 데이터 먹는 구간
const Email = ({firstName, lastName, email, callback}) => {
    return (
        <li className={styles.Email} id={styles.Email}>
            <a href='' onClick={function(e){e.preventDefault(); callback({email}['email']); console.log("자식쪽 :", {email}['email'])}}/>
            <h4>{email}</h4>
            <br/>
            <span>{`${firstName}${lastName}`}</span>
        </li>
    );
};

export default Email;