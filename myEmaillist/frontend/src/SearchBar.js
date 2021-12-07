import React, { useState } from 'react';
import styles from './assets/scss/SearchBar.scss';

const SearchBar = ({keyword, callback}) => {

    // 만약 이렇게 쓴다면, 위쪽과 아래쪽은 어떻게 바뀌어야 할까?
    // const [keyword, setKeyword] = useState('');
    // const onInputChanged = (e) => {
    //     setKeyword(e.target.value); 
    //     callback(e.target.value);
    // };

    return (
        <div className={styles.Searchbar}>
            찾기: <input type='text' placeholder='찾기' value={keyword} onChange={ (e) => callback(e.target.value) } />
        </div>
    );
};

export default SearchBar;