import React from 'react';
import Task from './Task';
import styles from './assets/css/TaskList.css';

export default function ({ tasks }) {

    // input : tasklist.css 사용
    // input에 글자 쓰고 엔터 치면 DB로 전송되고 화면 갱신하게 만들어 보세요.
    // input 안에 글자 쓰면, 그 글자는 어디에 있을까?

    // 카드 안의 데이터를 바꾸려면(CRUD), 결국 Kanbanboard.js까지 올라가야한다.

    return (
        <div className={styles.TaskList}>
            <ul>
                {tasks.map((task) => <Task key={task.no} name={task.name} />)}
            </ul>

            <input
                className={styles['TaskList--add-task']}
                placeholder='태스크 추가'>
            </input>
        </div>
    );
}