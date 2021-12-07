import React, { useState, useRef, useEffect } from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

export default function Guestbook() {
  const outterRef = useRef(null);
  const innerRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log('최초 메세지 리스트 가져오기');
    fetchMessages();
  }, []); // 마운트를 보장해주기 때문에, 빈 배열 [] 을 사용한다.

  const notifyMessage = {
    add: function (message) {
      console.log('ajax posting.....');

      // 통신이 성공했다 가정
      // 통신이 성공하면 10 대신에 그 자리에 오토 인크리먼트에 맞는 숫자가 들어가겠지?
      message.no = 10;
      message.password = '';

      // 통신이 성공하면
      // [{},{},{}] 이런 식으로 들어오겠지?
      // ... : 배열로 들어온 부분을 분해
      // 분해 안하면 [message, [{...}, {...}, {...}]] 형태가 되어버림
      setMessages([message, ...messages]);

      // let arr = [1, 2, 3, 4]
      // let arr1 = [1, [1, 2, 3, 4]]
      // 이렇게 들어오게 되는데, 우리는 
      // [1, 1, 2, 3, 4]
      // 이렇게 넣고 싶잖아요? 그죠?
      // 원래대로라면 arr1을 새로 받아와서, 반복문을 돌면서 배열을 분해하고, 다시 넣을텐데
      // ... 하게 되면 배열을 자동으로 분해해서 append 해줌

      // let arr1 = 1
      // let arr2 = [2, 3, 4]
      // [1, ...arr2] => 구조분해해서 배열에 삽입
    },

    delete: function (no) {
      // [1, 2, 3]에서 필터로 2를 빼고 [1, 3]을 "새로 만들"어서 setMessages로 보내줌
      setMessages(messages.filter(message => message.no !== no));
      console.log('메세지 상태에서 메세지 삭제:', no);

    }
  }

  // useEffect(async () => {
  //   try {
  //     const response = await fetch('/api', {
  //       method: 'get',
  //       // credentials : 토큰 전달에 쓰임
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       },
  //       body: null
  //     });

  //     // response가 not OK면 throw로 던짐
  //     if (!response.ok) {
  //       throw new Error(`${response.status} ${response.statusText}`);
  //     }

  //     const jsonResult = await response.json();

  //     if (jsonResult.result !== 'success') {
  //       throw new Error(`${jsonResult.result} ${jsonResult.message}`);
  //     }

  //     setEmails(jsonResult.data);

  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, []);

  const fetchMessages = async () => {
    const isFetching = true;

    // 페칭중이면 리턴 : 플래그 함수
    if(isFetching){
      return;
    }

    try {
      isFetching = true;
      console.log("fetching.....");

      const startNo = messages.length == 0 ? 0 : messages[messages.length - 1].no;
      const response = await fetch(`/api/${startNo}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if (json.result !== 'success') {
        throw json.message;
      }

      setMessages([...messages, ...json.data]);

      isFetching = false;

    } catch (err) {
      console.error(err);
    }
  };

  // 이 위치에서 함수 설정하고 callback 받은 다음 setMessages(message)로 변경
  // ref : 스크롤 이벤트 걸기 위해서 사용
  return (
    <div
      ref={outterRef}
      className={styles.ScrollOuter}
      onScroll={e => {
        if (outterRef.current.scrollTop + outterRef.current.clientHeight > innerRef.current.clientHeight) {
          fetchMessages();
          console.log("fetching...");
        }
      }}>
      <div ref={innerRef}>
        <div className={styles.Guestbook}>
          <h1>방명록</h1>
          <WriteForm notifyMessage={notifyMessage} />
          <MessageList messages={messages} notifyMessage={notifyMessage} />
        </div>
      </div>
    </div>
  );
}