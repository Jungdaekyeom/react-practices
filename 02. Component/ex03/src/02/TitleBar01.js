import React, {Component} from 'react';

// 클래스형
export default class TitleBar01 extends Component {
    constructor(){
        // super(p1, p2, p3;)
        // super(arguments[0], arguments[1], ...); 
        // 대신 나온게 스프레드(...) 연산자
        super(...arguments);

        this.no = 0;
        this.state = {
            no: 0
        }
    }

    onClickHandler(){
        // 이벤트 함수에서의 this는 또 다름.

        // no VS state.no
        this.no++;
        this.setState({
            no: this.state.no + 1
        });

        console.log('TitleBar01 clicked');
    }

    // 함수형 컴포넌트에서는 this를 이렇게(this.onClickHandler) 사용할 수 없음
    // 함수형 컴포넌트에서의 this는 caller
    // 현재는 dom 이 onClickHandler를 호출하니까, bind로 미리 바인딩시켜서 부름
    render() {
        return (
            <h1
                onClick = { this.onClickHandler.bind(this) }
                style={{cursor: 'pointer'}}>
                ex03 - Functional Event Handler(Class Component) : 핸들러를 클래스화
                {`no: ${this.no}, state.no: ${this.state.no}`}
                /
                {this.state.no}
            </h1>
        )
    }
}