import React, { Component } from 'react';

/*
푸드 리스트 컴포넌트를 만들려고 한다.
*/   
export default class App extends Component {
    constructor(){

        super(arguments);
        
        this.foods = [{
            no: 1,
            name: 'Bread',
            quantity: 10
        }, {
            no: 2,
            name: 'Milk',
            quantity: 5
        }, {
            no: 3,
            name: 'Egg',
            quantity: 20
        }];
    }
    
    return() {
        return (
            <div id='App'>
                <FoodList foods={foods}/>
            </div>
        );
    }
}