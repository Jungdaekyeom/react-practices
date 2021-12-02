import React, {useState} from 'react';
import TaskList from './TaskList';
import styles from './assets/scss/Card.scss';

export default function({title, description, tasks, status}){
    const [showDetails, setShowDetails] = useState(false);

    /* 보드들 사이에 버티컬 바 하나 그림 */

    // 포지션 속석 값이 static이 아닌 element끼리는 겹칠 수 있습니다.
    // 기본 순서는 나중에 선언 된 것이 위로 나오게 되지만,
    // 만약 이 순서를 바꾸고 싶다면 zIndex 속성을 사용한다.
    const styleSideColor ={
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        width: 3,
        height: '100%',
        backgroundColor: status === 'Doing' ? 'Red' : (status === 'ToDo' ? 'Green' : 'Blue')
    }


    // [Hello, World].join(' ') = Hello World
    return(
        <div className={styles.Card}>
            {/* 보드들 사이에 버티컬 바 하나 그림 */}   
            <div style={styleSideColor} />
            <div 
                className={
                    showDetails ? 
                        [styles.Card__Title, styles.Card__Title__open].join(' ') : 
                        styles.Card__Title
                }
                onClick = {() => setShowDetails(!showDetails)}>
                { title }
            </div>
            {
                showDetails ? 
                        <div className={styles.Card__Details}>
                            {description}
                            <TaskList tasks={tasks} />
                        </div> : null
            }
        </div>
    );
}