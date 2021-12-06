import React, {Fragment, useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Message from './Message';
import styles from './assets/scss/MessageList.scss';
import modalStyles from "./assets/scss/modal.scss";

Modal.setAppElement('body');

// 만약 상태가 변화했을 때(모달창이 띄워졌을 때)
// 비밀번호 창에 바로 포커스가 잡히게끔 하려면 어떻게 해야할까?
// refForm

export default function MessageList({messages, notifyMessage}) {
    const refForm = useRef(null); // 모달이 마운트 된 시점에서 포커스를 옮기기 위한 변수

    // 기본값은 객체
    // 지금 여기선 isOpen을 false로만 초기값을 줬지만, 다른것도 다 초기로 줄 수 있음.
    // useState안에 isOpen말고 다른 설정도 넣어보자(ex. label)
    const [modalData, setModalData] = useState({isOpen: false});

    // 포커스가 벗어났을때 다시 넣기 전에 잠깐 여유시간을 줌
    useEffect(() =>{
        setTimeout(() => {
            refForm.current && refForm.current.password.focus();
        }, 200);
    }, [modalData]);


    // e.target.password.value : e.target에서 이름이 password인 곳의 value
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("사용자가 만든 이벤트인가요? : " + e.isTrusted);
        // console.log("e.target", e.target);
        
        // e.target.password.value
        // 여기서 e.target 한 다음, password는 name으로 접근함
        try {
            if(e.target.password.value === ''){
                return;
            }

            // 통신은 부모 위에서 하는게 좋다.
            // 부모에게 no가 10번인 놈을 찾아서 지우라고 하면 됨.
            /* =========================== 통신 구간 =========================== */
            // const response = await fetch(`/api/${modalData.messageNo}`, {
            //     method: 'delete',
            //     header: {
            //         'Content-Type':'application/json',
            //         'Accept':'application/json'
            //     },
            //     body:JSON.stringify({password: modalData.password})
            // });

            // if(!response.ok){
            //     throw `${response.status} ${response.statusText}`;
            // }

            // const jsonResult = response.json;

            /* =========================== 통신 구간 =========================== */

            // 비밀번호가 틀린 경우
            // 모달창 위의 텍스트를 경고문으로 바꿔야함.
            // jsonResult.data = null;

            // by 용수
            // Object.assign({} => 새 주소(빈 집)로 복사한 후에, modalData를 복사해서 갖고오고
            // 그렇게 가지고 온 modalData를 label을 비밀번호가 일치하지 않습니다. 로 덮어씌우고, password를 빈 것으로 덮어씌운다.
            setModalData(Object.assign({}, modalData, {label: '비밀번호가 일치하지 않습니다.', password: ''}));
            
            // 잘 삭제가 된 경우
            // jsonResult.data가 10;
            setModalData({isOpen: false, password:''});
            notifyMessage.delete(modalData.messageNo);
            // console.log("삭제!!:", modalData);
        } catch(err) {
            console.error(err);
        }
    }

    const notifyDeleteMessage = (no) => {

        // console.log( '(BottomUp) Delete : ' + no );
        // setMessageNo(no);
        // setpassword('');
        // setIsOpen(true); // 상태 변화시켜서 모달 띄우기
        setModalData({
            // 원래 위에 있던 부분
            // const [isOpen, setIsOpen] = useState(false);
            // const [password, setpassword] = useState('');
            // const [messageNo, setMessageNo] = useState(0);
            label: '작성 시 입력한 비밀번호를 입력하세요.',
            isOpen: true,
            messageNo: no,
            password: ''
        })
        
        // setModelData({})에서 {}는, 객체 리터럴로 새로운 객체를 만드는 것.
        // 따라서, 처음 만들었던 곳을 찾아가는 것이 아니라 처음 것을 복사한 후, 변경값을 넣고 그 주소를 찾아간다.
        // var obj = 
        //     {label: '작성 시 입력한 비밀번호를 입력하세요.',
        //     isOpen: true,
        //     messageNo: no,
        //     password: ''}
        // setModalData(obj)
        // 와 같다.
    }

    return (
        <Fragment>
            {/* 메세지 그려주는 부분 */}
            <ul className={styles.MessageList}>
                {messages.map(message => <Message key={`guestbook_message_${message.no}`}
                                                  no={message.no}
                                                  name={message.name}
                                                  message={message.message}
                                                  notifyDeleteMessage = {notifyDeleteMessage} />)}
            </ul>
            {/* Message.js 삭제버튼 누르면 Modal 켜짐 */}
            <Modal
                isOpen={modalData.isOpen}
                // o = { a:10, b:20 }
                // o1 = { a:10, b:30 } : a는 그대로 두고, b값만 20에서 30으로 변경하고 싶다.
                // Object.assign({}, o, {b:30}); filter 대신 삽질하면서 썼던 것.
                // 리액트에서 Object.assign은 매우 중요

                // 닫을 때 실행시킬 함수가 있을 경우, 해당 구문을 사용
                // onRequestClose={ 안에서 function을 실행시킴}
                // 따라서, 순서는 이렇다.
                // 1. 화면 밖을 누른다
                // 2. shouldCloseOnOverlayClick가 실행된다.
                // 3. shouldCloseOnOverlayClick가 true면, onRequestClose가 실행
                // 4. onRequestClose안의 function이 실행된다.
                // 5. function안에 inOpen:false를 실행시켜, 모달을 닫는다.
                onRequestClose={() => setModalData(Object.assign({}, modalData, {isOpen:false}))}
                
                // shouldCloseOnOverlayClick : true면 밖에 눌렀을 때 onRequestClose를 실행
                shouldCloseOnOverlayClick={ true }

                className={modalStyles.Modal}
                overlayClassName={modalStyles.Overlay}
                style={{content: {width: 350}}}>
                <h1>비밀번호입력</h1>
                <div>
                    <form
                        /* 수업시간에 refForm 추가*/
                        /* 마운트(가 뭘까)가 된 다음 타이머를 써서 포커스를 옮기는게 가장 좋음 */
                        ref={refForm}
                        className={styles.DeleteForm}
                        onSubmit={handleSubmit}>
                        <label>{modalData.label}</label>
                        <input
                            type={'password'}
                            autoComplete={'off'}
                            name={'password'}
                            value={modalData.password}
                            placeholder={'비밀번호'}
                            onChange={(e) => setModalData(Object.assign({}, modalData, {password:e.target.value}))}/>
                    </form>
                </div>
                <div className={modalStyles['modal-dialog-buttons']}>
                    {/* https://ko.javascript.info/dispatch-events */}
                    {/* 위의 폼과 버튼이 summit이 아님 */}
                    {/* cancelable를 true로 설정하지 않으면 preventDefault가 동작하지 않습니다. */}
                    {/* bubbles: true/false – true인 경우 이벤트가 버블링 됩니다. */}
                    {/* new Event(type[, options]); */}
                    <button onClick={() => {
                        console.log("입력한 비밀번호", modalData.password);
                        // ref를 쓰지 않으면 form 태그에 접근할 방법이 없음

                        // refForm.current : 위에 써진 부분은 리엑트 DOM 트리인데, .current를 쓰면
                        // 실제 나중에 그려지는 dom 트리에 접근한다. 

                        // 폼 태그의 summit 이벤트를 발생시킴
                        // bubbles: true
                        // 해당 form이 실제 HTML소스면, 애초에 위의 form 태그에 함수를 넣을 수 없다.
                        // 따라서 실행을 위해 리액트가 읽으면서 form태그를 상단에 위치시키

                        // 
                        refForm.current.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}));
                        // setIsOpen(false); // 확인 누르면 창 닫히게
                    } }>확인</button> 
                    <button onClick={() => setModalData(Object.assign({}, modalData, {isOpen:false})) } >취소</button>
                </div>
            </Modal>
        </Fragment>
    );
}

// Object.assign
// ({}, modalData, {isOpen:false})
// 1. {} 빈 객체를 넣어주는 이유는, 새로운 객체를 만들고 그 안에 다시 modalData를 만들어주게끔
// 2. 빈 객체(빈 집) 만들어 주고 나서 isOpen을 덮어씌움
// Object.assign({}, modalData, {isOpen:false}) 랑 Object.assign(modalData, {isOpen:false})는 같다.

// Object.assign(modalData, modalData, {isOpen:false}) 하면, 결국 같은 modalData를 가리키기 때문에 변화가 없다.
// 변화를 주려면 아예 새로 주소를 파고 복붙한 후, 바뀐 부분(or 새로 만들어지는 부분)을 덮어씌워야 한다.

MessageList.propType = {
    message: PropTypes.arrayOf(PropTypes.shape(Message.propType))
}