import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder1 = state.order;
console.log(updateOrder1);

updateOrder1.receive = '부산시 동래구 온천3동';

// 불변성 깨짐(위배됨)
console.log(state.order, updateOrder1, state.order === updateOrder1);

console.log("==========================Object.assign===========================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

// Object.assign 은 deep copy는 하지 않는다.
let updateOrder2 = Object.assign({}, state.order, {
    receive: '부산시 동래구 온천3동'
});

console.log(state.order, updateOrder2, state.order === updateOrder2);
