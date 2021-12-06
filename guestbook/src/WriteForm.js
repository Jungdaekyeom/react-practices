import React, {useRef} from 'react';
import styles from './assets/scss/WriteForm.scss';

export default function WriteForm({notifyMessage}) {
    const refForm = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // e.target으로 배열을 만듦
        // () 안에는 e.target 밑에 있는 애들을 집어넣음

        try{
            const message = Array.from(e.target, (input) => {
                // simple validation
                if(input.value === '') {
                    // 왜 에러를 발생시켜야 하지?
                    throw `validation ${input.placeholder} is empty`;
                }

                return {n: input.name, v: input.value};

                // 아래와 같은 형태
                // [
                //     {n:'name', v:'...'},
                //     {n:'password', v:'...'},
                //     {n:'message', v:'...'},
                //     {n:'', v:'...'} // 이 부분은 넘길 필요가 없으므로, filter 사용
                // ]
            })
            .filter(({n}) => n !== '')
            .reduce((res, {n, v}) => { 
                res[n] = v;
                return res;
            }, {});
            // 마지막에 보내기 input은 넣지 않기 위해서 filter로 걸러냄. 왜 {n} 이지?
            // o : 오브젝트. object.n이 object.v로 변화하는걸 계속 반복시킨 후, return
            
            // 보내고 나서 텍스트창 전부 리셋
            refForm.current.reset();
            notifyMessage.add(message);
            console.log(message);
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
                autoComplete={' off'}/>
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