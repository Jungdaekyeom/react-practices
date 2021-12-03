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
    const [modalData, setModalData] = useState({isOpen: false});

    // 포커스가 벗어났을때 다시 넣기 전에 잠깐 여유시간을 줌
    useEffect(() => {
        setTimeout(()=>{
            refForm.current && refForm.current.password.focus();
        }, 200);
    }, [modalData]);

    // e.target.password.value : e.target에서 이름이 password인 곳의 value
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("사용자가 만든 이벤트인가요? : " + e.isTrusted);
        // console.log("e.target", e.target);

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
            title: '작성 시 입력한 비밀번호를 입력하세요.',
            isOpen:true,
            messageNo: no,
            password:''
        })
    }

    return (
        <Fragment>
            <ul className={styles.MessageList}>
                {messages.map(message => <Message key={`guestbook_message_${message.no}`}
                                                  no={message.no}
                                                  name={message.name}
                                                  message={message.message}
                                                  notifyDeleteMessage = {notifyDeleteMessage} />)}
            </ul>
            <Modal
                isOpen={modalData.isOpen}
                // o = { a:10, b:20 }
                // o1 = { a:10, b:30 } : a는 그대로 두고, b값만 20에서 30으로 변경하고 싶다.
                // Object.assign({}, o, {b:30}); filter 대신 삽질하면서 썼던 것.
                // 리액트에서 Object.assign은 매우 중요

                onRequestClose={() => setModalData(Object.assign({}, modalData, {isOpen:false}))}
                shouldCloseOnOverlayClick={true}
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
                        refForm.current.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}));
                        // setIsOpen(false); // 확인 누르면 창 닫히게
                    } }>확인</button> 
                    <button onClick={() => setModalData(Object.assign({}, modalData, {isOpen:true})) } >취소</button>
                </div>
            </Modal>
        </Fragment>
    );
}

MessageList.propType = {
    message: PropTypes.arrayOf(PropTypes.shape(Message.propType))
}