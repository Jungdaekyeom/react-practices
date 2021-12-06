## Immutability: 컴포넌트 상태의 불변성

### Basic Principles:
1. Never Manupulate Component's state DIRECTLY! : 절대로 구성 요소의 상태를 직접 조작하지 마라.(직접 값을 바꾸려 하지 마라)
2. Treat Component's State As If It were IMMUTABLE! : 처음 만든 건 불변이라 생각하고, 새걸 만든다는 생각으로 하라.
3. Always Use the setState or Method returned by useState Hook to Update the State of Component! : setState를 항상 사용하라.

### Cause:
1. this.state를 직접 조작하는 것은 React의 상태 관리를 우회하는 것 -> Against the React paradigm and Potentially Dangerous
2. 이 후, setState() 호출은 this.state를 직접 조작한 내용을 무효화한다.
3. 나중에 성능개선 여지가 없다.
   - 객체의 변경 유무 검사시 객체 동질성 비교는 고비용(같은 숫자인데, 숫자 밑의 것들이 바뀌어있으면 찾는데 시간이 오래 걸린다는 건가?)
     - 해당 내용은 객체지향형
   - 객체의 변경 유무 검사시 객체 동일성 비교는 저비용(object1 === object2) => ===의 경우, 렌더를 안해버린다.
     - 해당 내용은 함수형
     - ===가 아니라, 언제나 객체를 치환하려고 해라(!== 를 쓸 수 있도록)
4. 결론은 변경하지 말고 대체해라: 불변성의 주개념!!!!
5. Functional JavaScript 에서는 4번이 표준이 아니다(가능하지만) 따라서 의도치 않게 변경할 가능성이 있다 -> 이를 주의해야 한다.

### Violation Example: Class Component

```javascript
this.state.emails = [{}, {}, {}];
let emails = this.state.emails;
emails.push({}); <- 원래 state에 있는 emails를 변경시킨거니까, 이러면 안됨
```

### How I:
1. 비파괴 배열 메소드 및 연산자: map, filter, concat, ...(ES6 spread 연산자 활용) => 매번 새로운 배열을 만드니까 문제가 생기지 않는다.
2. src/01 참고

### How II:
1. Object.assign 을 이용해 변경이 적용된 객체를 새로 생성하는 방법 -> src/02
2. deep copy를 지원하지 않아서, 불변성에 위배될 여지가 있다.(copy전의 배열이 가리켰던 곳을 다시 가리키게 된다.)
3. src/02 참고

### How III:
1. I, II는 Nest Object(중첩된 객체 - https://hammerbrother.tistory.com/18) 가 있는 경우 까다롭다.
   - Object.assign은 deep copy 지원 안함.
   - deep clone을 뜨는 방법은 비용이 비싸다.
   - 직접 하는 방법은 관리가 어렵고 코드에 실수가 있을 가능성 많음.
2. 이는 자바스크립트가 원래 저 따위이기 때문에 어쩔 수 없다.
3. src/03 참고

### How IV:
1. React Addon에 복잡하고 중첩된 객체의 변경을 도와주는 immutablity helper 함수를 사용하는 것이다.
2. add-on 설치

```bash
$ npm i react-addons-update
```

3. 적용

```javascript
import update from 'react-addons-update';

const newObject = update(objectInState, { [WHERE] : { [WHAT]: updateValue } });
```

4. 업데이트 형식
   - 속성 변경       $set
   - 배열 요소 추가   $push
   - 배열 요소 변경   $set

5. WHAT 명령
   - $push      *
   - $splice
   - $unsift
   - $set       *
   - $merge
   - $apply

6. src/04 참고