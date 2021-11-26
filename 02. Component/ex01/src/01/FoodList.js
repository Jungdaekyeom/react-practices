// 리액트, 컴포넌트 임포트
import React, { Component } from "react";
import ListItem from './ListItem'

// 리스트 아이템 컴포넌트를 임포트한 다음
// 세개 불러옴.
export default class FoodList extends Component {
    render(){
        return (
        <ul>
            {/* <li>Bread : 11230</li>
            <li>Milk : 5</li>
            <li>Egg : 20</li> */}

            {/* <ListItem />
            <ListItem />
            <ListItem /> */}

            <ListItem name='Egg' quantity='10'/>
            <ListItem name='Milk' quantity='20'/>
            <ListItem name='Bread' quantity='5'/>
            <ListItem name='Carrot' quantity='30'/>
            
        </ul>
        )
    }
}