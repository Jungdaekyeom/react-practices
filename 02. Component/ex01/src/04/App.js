import React from 'react';
import MyComponent from './MyComponent';

/*
프로퍼티 세팅을 하지 않았음. props01={''} 
*/   
export default function() {
    return (
        <div id='App'>
            <MyComponent
                /* props01={'문자열'} */
                props02={ 30 }
                props03={ true }
                props04={ {no:1} }
                props05={ [1, 2, 3, 4] }
                props06={ () => '함수' }
                props07={ '200' }
                props08={ [false, true, true] }
                props09={ {
                    no:1, 
                    name:'정대겸',
                    email:'pocpoc0202@naver.com'
                } }
            /> 
        </div>
    )
}