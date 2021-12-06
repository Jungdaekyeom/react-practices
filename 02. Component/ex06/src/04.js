import fs from 'fs';
import update from 'react-addons-update'; // npm i react-addons-update

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder = update(state.order, {
    receive: {
        $set: '부산시 동래구 온천3동'
    },
    // 해당 path(경로)의 value change(값 변경)
    payment:{
        method:{
            $set: 'Mobile'
        }
    },
    products: {
        // 배열 요소 변경(인덱스로 찾아서)
        0: {
            amount: {
                $set: 5 // 뭐가 바뀌었고, 앞 예제와 뭐가 다르게?
            }
        }
    }
});

// 해당 구문(03번 구문)으로는 Nest Object를 건드릴 수 없어,
// 위와 같은 방법 사용
// updateOrder.payment.method = 'Mobile';

console.log(
    state.order,
    updateOrder,
    state.order === updateOrder,
    state.order.receive === updateOrder.receive,
    state.order.payment === updateOrder.payment,
    state.order.products == updateOrder.products,
    state.order.products.amount == updateOrder.products.amount, // 이건 왜 true고
    state.order.products[0].amount == updateOrder.products[0].amount // 이건 왜 false게? ㅋ
);