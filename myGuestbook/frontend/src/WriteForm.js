import React, { useRef } from 'react';
import styles from './assets/scss/WriteForm.scss';

export default function WriteForm({ notifyMessage }) {
    const refForm = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // e.target으로 배열을 만듦
        // () 안에는 e.target 밑에 있는 애들을 집어넣음

        const notifyMessage = {
            add: async function (message) {
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

        try {
            const message = Array.from(e.target, (input) => {
                // simple validation
                if (input.value === '') {
                    // 왜 에러를 발생시켜야 하지?
                    throw `validation ${input.placeholder} is empty`;
                }

                return { n: input.name, v: input.value };

                // 아래와 같은 형태
                // [
                //     {n:'name', v:'...'},
                //     {n:'password', v:'...'},
                //     {n:'message', v:'...'},
                //     {n:'', v:'...'} // 이 부분은 넘길 필요가 없으므로, filter 사용
                // ]
            })
            .filter(({ n }) => n !== '')
            .reduce((res, { n, v }) => {
                res[n] = v;
                return res;
            }, {});
            // 마지막에 보내기 input은 넣지 않기 위해서 filter로 걸러냄. 왜 {n} 이지?
            // o : 오브젝트. object.n이 object.v로 변화하는걸 계속 반복시킨 후, return

            // 보내고 나서 텍스트창 전부 리셋
            refForm.current.reset();
            notifyMessage.add(message);
            console.log("입력한 내용 : " + message);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form
            ref={refForm}
            onSubmit={handleSubmit}
            className={styles.WriteForm}>
            <input
                type={'text'}
                name={'name'}
                placeholder={'이름'}
                autoComplete={' off'} />
            <input
                type={'password'}
                name={'password'}
                placeholder={'비밀번호'}
                autoComplete={'off'} />
            <textarea
                name={'message'}
                placeholder={'메세지(내용)'} />
            <input
                type={'submit'}
                value={'보내기'}
                autoComplete={'off'} />
        </form>
    );
}