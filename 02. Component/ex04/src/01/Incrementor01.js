import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            // step: this.props.step,
            val: this.props.begin
        }
    }

    // 밖에서 정의
    onClickButton(e) {
        // this.state.value = this.state.value + this.props.step;

        this.setState({
            val: this.state.val + this.props.step
        })
    }

    // 정의한걸 this.onClickButton으로 불러써!
    // 전부 다시 그림. 클릭하게되면 변화된 값으로 그림
    render() {
        return (
            <div>
                <button onClick={ this.onClickButton.bind(this) }>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
                {' '}
                <button onClick={ this.onClickButton.bind(this) }>
                    <strong>-</strong>
                </button>
            </div>
        );
    }
}