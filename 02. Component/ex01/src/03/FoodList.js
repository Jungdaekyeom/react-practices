import React from 'react';
import ListItem from './ListItem';

// 함수라서 함수 인자로 받아야 함
export default function FoodList({foods}) {
    return (
        <ul>
            { foods.map((food) => <ListItem
                                    key={food.no} 
                                    name={food.name}
                                    quantity={food.quantity} />) }   
        </ul>
    )
}