// fs : file system
import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

console.log(state);

const updateProducts = state.order.products;

// 실행 : node src/01
console.log(updateProducts);

updateProducts.push({
    "no": "s002-002",
    "name": "블루양말",
    "price" : 3500,
    "amount" : 1
}); 

// 불변성을 깬 것
// 이렇게 하면 안됨. 바꿨다고 생각했음에도 불구하고 같다.
console.log(state.order.products, updateProducts, state.order.products === updateProducts);

console.log("==========================map, filter, concat===========================");

// SyntaxError: Identifier 'state' has already been declared : 위에서 let state 해줬으므로, let으로 재선언해서 발생한 오류
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProducts2 = state.order.products.concat({
    "no": "s002-002",
    "name": "블루양말",
    "price" : 3500,
    "amount" : 1
})

console.log(state.order.products, updateProducts2, state.order.products === updateProducts2);


console.log("==========================... ES6 spread 연산자===========================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

// ... ES6 spread 연산자
const updateProducts3 = ([...state.order.products, {
    "no": "s002-002",
    "name": "블루양말",
    "price" : 3500,
    "amount" : 1
}]);

console.log(state.order.products, updateProducts3, state.order.products === updateProducts3);