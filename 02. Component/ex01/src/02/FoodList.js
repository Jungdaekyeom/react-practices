import React, { Component } from 'react';
import ListItem from './ListItem';

export default class FoodList extends Component {
    render() {

        // 이 구문이 길기 때문에, 리턴에 한줄로 보냄
        // map : 반복을 돌면서 하나하나 배열에 하나한 쌓아놓고, return을 해줌
        // const components = [];
        // this.props.foods.forEach(function(food){
        //    components.push(<ListItem name={food.name} quantity={food.quantity} />);
        // });

        // const r = [1, 2, 3, 4].map(function(e){
        //    return e * e;
        // });

        return (
            <ul>
                { this.props.foods.map((food) => <ListItem 
                                                    name={food.name} 
                                                    quantity={food.quantity} />) }   
            </ul>
        )
    }
}