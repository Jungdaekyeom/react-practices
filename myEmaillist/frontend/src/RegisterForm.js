import React from 'react';
import styles from './assets/scss/RegisterForm.scss';

export default function({callback}) {
    return (
        <form 
            className={styles.RegisterForm}
            onSubmit={ 
                function(e){
                e.preventDefault();
                callback(e.target.fname.value, e.target.lname.value, e.target.email.value); 
                }} >
            <input type='text' placeholder="성" className={styles.InputFirstName} id="fname"/>
            <input type='text' placeholder="이름" className={styles.InputLastName} id="lname"/>
            <input type='text' placeholder="이메일" className={styles.InputEmail} id="email"/>
            <input type='submit' value='등록' />
        </form>
    );
}