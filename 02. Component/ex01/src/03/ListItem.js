// 리액트 임포트
import React from 'react';

export default function ListItem({name, quantity}) {
    return (
        <li>{name} : {quantity}</li>
    );
}