// 리액트, 컴포넌트 임포트
import React, { Component } from "react";
import ListItem from './ListItem'

// 리스트 아이템 컴포넌트를 임포트한 다음
// 세개 불러옴.
export default class FoodList extends Component {
    render(){

        console.log(this.props.foods);

        const components = [];
        
        // const foods = this.props.foods;

        // for(let i=0; i<foods.length; i++){
        //     components[i] = <ListItem name={foods[i].name} quantity={foods[i].quantity}/>;
        // }

        // 위 아래 같음.
        // 컴포넌트가 뭔지 파악할 것
        
        this.props.foods.forEach(function(food, index){
            components[index] = <ListItem name={food.name} quantity={food.quantity}/>;
        });
        
        // 사용법
        const e = [1, 2, 3, 4].map(function(e){
            return e * e;
        });

        console.log(e);

        const r = this.props.foods.map((food) => <ListItem name={food.name} quantity={food.quantity} />)

        return (
        <ul>
            <p>test1</p>
            {/* {[<ListItem name='Milk' quantity='20'/>, <ListItem name='Bread' quantity='5'/>, <ListItem name='Carrot' quantity='30'/>]} */}
            {components}
            <br/>
            
            <p>test2</p>
            {r}
            <br/>

            <p>test3</p>
            {this.props.foods.map((food) => <ListItem
                                                name={food.name}
                                                quantity={food.quantity} />) }
            <br/>
        </ul>
        )
    }
}