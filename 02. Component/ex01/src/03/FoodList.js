import React from "react";
import ListItem from './ListItem'

// 컴포넌트
export default function FoodList({foods}) {
    return (
        <ul>
            { foods.map((food) => <ListItem
                                    key={food.no}
                                    name={food.name}
                                    quantity={food.quantity} />) }
            <br/>
        </ul>
    )
}