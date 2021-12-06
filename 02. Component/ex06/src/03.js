import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder = Object.assign({}, state.order, {
    receive: '부산시 동래구 온천3동'
});

updateOrder.payment.method = 'Mobile';

// payment 가 원래 있던 데이터를 변경시켜버림(true)
// Nest Object(중첩된 객체)의 문제
// deep copy가 되지 않았다는 증거
console.log(
    state.order,
    updateOrder,
    state.order === updateOrder,
    state.order.receive === updateOrder.receive,
    state.order.payment === updateOrder.payment
);