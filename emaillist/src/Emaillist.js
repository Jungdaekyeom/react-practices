import React from 'react';
import styles from './assets/scss/Emaillist.scss';
import Email from './Email';

// -1의 의미가 뭐지?
const Emaillist = ({keyword, emails, callback}) => {
    return (
        <ul className={styles.Emaillist}>
            {
                emails
                    .filter(email => email.firstName.indexOf(keyword) !== -1 || email.lastName.indexOf(keyword) !== -1 || email.email.indexOf(keyword) !== -1) 
                    .map((email) => <Email
                                            key={email.no} 
                                            firstName={email.firstName} 
                                            lastName={email.lastName} 
                                            email={email.email}
                                            callback={callback} />)
            }
        </ul>
    );
};

export default Emaillist;