import React, {useState} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

import data from './assets/json/data.json';

export default function Guestbook() {
    const [messages, setMessages] = useState(data);

    useEffect(() => {
        console.log('After Mount(componentDidMount)');
        return (function(){
            console.log('After Unmount(componentWillUnmount)');
        });
    }, []); // [] 없으면 렌더링 할 때마다 호출

    const notifyMessage = {
        add: function(message){
            console.log('ajax posting...');
            
            // 통신이 성공했다 가정
            message.no = 10;
            message.password = '';

            // 통신이 성공하면
            // [{},{},{}] 이런 식으로 들어오겠지?
            // ... : 배열로 들어온 부분을 분해
            // 분해 안하면 [message, [{...}, {...}, {...}]] 형태가 되어버림
            setMessages([message, ...messages]);
        },

        delete: function(no){
            // ??
            setMessages(messages.filter(message => message.no !== no));
            console.log('메세지 상태에서 메세지 삭제:', no);

        }
    }

    const fetchMessageList = () => {
        console.log('message list 가져오기');
    };


    // 이 위치에서 함수 설정하고 callback 받은 다음 setMessages(message)로 변경
    return (
        <div className={styles.ScrollOuter}>
            <div>
                <div className={styles.Guestbook}>
                    <h1>방명록</h1>
                    <WriteForm notifyMessage={notifyMessage}/>
                    <MessageList notifyMessage={notifyMessage} messages={messages}/>
                </div>
            </div>
        </div>
    );
}