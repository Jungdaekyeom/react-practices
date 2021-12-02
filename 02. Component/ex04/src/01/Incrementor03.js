import React, { Component } from "react";

export default class extends Component {

    // 생성자
    constructor(){
        super(...arguments);

        // 부모에게서 받아온 값
        // 세터(setter)
        // 화면이 변경되면 바뀌어야 할 값을 넣어준다.
        this.state = {
            // num에 바뀌는 값 넣어줌
            // 부모에서 begin으로 받아옴.
            myNum: this.props.begin
        }
    }

    onClickButtonPlus(e) {
        this.setState({
            // 생성자에서 생성한 num값 가져옴. 근데 그게 부모에서 받은 begin
            // 부모에게서 받아온 step을 여기에서 활용
            myNum: this.state.myNum + this.props.step
        })
    }

    onClickButtonMinus(e) {
        this.setState({
            myNum: this.state.myNum - this.props.step
        })
    }

    render() {
        return (
            <div>
                <button onClick = {this.onClickButtonPlus.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.myNum}</span>
                {' '}
                <button onClick = {this.onClickButtonMinus.bind(this)}>
                    <strong>-</strong>
                </button>
            </div>
        );
    }
}