import React, {Fragment, useRef} from 'react';
import logo from '../assets/images/react-logo.png';
// jQuery를 호출해서 써도 되지만, 하지마라.


// ReactDom에 접근하는걸 엘리먼트라고 한다.
export default function App() {
    // imageRef로 DOM 엘리먼트에 접근하면 됨
    const imageRef = useRef(null);

    const onKeyPressInput = (e) =>{
        if(e.key = 'Enter'){
            console.log(e.target.value);
        }
    };

    const onFocusInput = (e) =>{
        console.log('focused');
    }

    const onBlurInput = (e) =>{
        console.log('blur');
    }

    const onMouseOverImage = (e) => {
        console.log('마우스 오버!! 위치!!!', `x=${e.clientX} y=${e.clientY}`);
    }

    const onMouseMoveImage = (e) => {
        // 이게 뭐지?
        const offsetTop = imageRef.current.offsetTop;
        const offsetLeft = imageRef.current.offsetLeft;

        console.log('마우스 무브!! 위치!!!', `x=${e.clientX-offsetLeft} y=${e.clientY-offsetTop}`);
    }

    const onMouseOutImage = (e) => {
        console.log('마우스 아웃!! 위치!!!', `x=${e.clientX} y=${e.clientY}`);
    }
    const onMouseDownImage = (e) => {
        console.log('마우스 다운!! 위치!!!', `x=${e.clientX} y=${e.clientY}`);
    }
    const onMouseUpImage = (e) => {
        console.log('마우스 업!! 위치!!!', `x=${e.clientX} y=${e.clientY}`);
    }
    const onClickImage = (e) => {
        console.log('마우스 클릭!! 위치!!!', `x=${e.clientX} y=${e.clientY}`);
    }
    const onDoubleClickImage = (e) => {
        console.log('마우스 더블클릭!! 위치!!!', `x=${e.clientX} y=${e.clientY}`);
    }

    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={ onFocusInput }
                onBlur={ onBlurInput } 
                />
                <br/>
                <br/>
            <img
                ref={ imageRef }
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }

                onMouseOver={ onMouseOverImage }
                onMouseMove={ onMouseMoveImage }
                onMouseOut={ onMouseOutImage }
                onMouseDown={ onMouseDownImage }
                onMouseUp={ onMouseUpImage }
                onClick={ onClickImage }
                onDoubleClick={ onDoubleClickImage }
                />
        </Fragment>
    );
}