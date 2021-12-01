import React, {Component, useRef} from 'react';
import './assets/scss/App.scss';

export default class App extends Component {

    onScroll(e){
        // 함수 안에서 쓸 때는 current를 빼야함
        // console.log(this.outterRef.current.scrollTop, ':', this.outterRef.current.clientHeight + ':', this.innerRef.current.clientHeight)
        console.log(this.outterRef.scrollTop, ':', this.outterRef.clientHeight, ":" , this.innerRef.clientHeight);
    }

    // dom element를 ref = { (ref) => this.innerRef = ref } 이렇게 매핑
    render() {
        return (
            <div
                ref = { (ref) => this.outterRef = ref }
                className={'App'}
                onScroll={ this.onScroll.bind(this) }>
                <div
                    ref={ ref => this.innerRef = ref }>
                    <ul>
                        {Array.from({length: 100}, (_, i) => i + 1).map(i =>
                            <li>
                                {`아이템 ${i} 입니다.`}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}