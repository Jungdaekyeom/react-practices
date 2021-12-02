import React, { Component } from 'react';

// ... 스프레드 : 배열에 123있으면 콤마로 찍어주는거
// props : 
export default class extends Component {
    constructor() {
        super(...arguments);
        
        // setState : 자바의 setter와 같음
        // 화면이 변경되면 바뀌어야 할 값만 넣어준다.
        this.state = {
            // step: this.props.step,
            // var에 바뀌는 값 넣어줌
            val: this.props.begin
        }
    }

    // 밖에서 정의
    onClickButtonPlus(e) {
        // this.state.value = this.state.value + this.props.step;
        this.setState({
            val: this.state.val + this.props.step
        })
    }

     // 밖에서 정의
    onClickButtonMinus(e) {
        // this.state.value = this.state.value + this.props.step;
        this.setState({
            val: this.state.val - this.props.step
        })
    }

    // 정의한걸 this.onClickButton으로 불러써!
    // 전부 다시 그림. 클릭하게되면 변화된 값으로 그림
    // <span>{this.props.begin}</span> : 이걸 쓰면 부모에게 받은 값을 fix해둘 뿐임
    // no++; / console.log(this.no) / <span> this.no <span>
    // 하더라도, 콘솔창의 값이 바뀔 뿐 화면(span)의 값이 바뀌지는 않는다.
    render() {
        return (
            <div>
                <button onClick={ this.onClickButtonPlus.bind(this) }>
                <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
                {' '}
                <button onClick={ this.onClickButtonMinus.bind(this) }>
                    <strong>-</strong>
                </button>
            </div>
        );
    }
}