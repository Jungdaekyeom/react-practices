import React from 'react';
import styles from './assets/scss/Email.scss';

// json 데이터 먹는 구간
const Email = ({firstName, lastName, email}) => {
    return (
        <li className={styles.Email}>
            <a href='' />
            <h4>{email}</h4>
            <br/>
            <span>{`${firstName} ${lastName}`}</span>
        </li>
    );
};

export default Email;