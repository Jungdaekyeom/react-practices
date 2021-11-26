// 리액트, 컴포넌트 임포트
import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        return (
            <li>{this.props.name} : {this.props.quantity}</li>
        )
    }
}