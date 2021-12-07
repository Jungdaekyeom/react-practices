import React, { Component } from 'react';
import './assets/scss/Clock.scss';

export default class Clock extends Component {
    constructor() { // 한번 불리고 끝
        super(...arguments)
        let date = this.getCurrentClockTime()
        this.state = {
            hours: date.hours,
            minutes: date.minutes,
            seconds: date.seconds
        }
    }

    getCurrentClockTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);

        setInterval(function(){
            
            let date = new Date();
            this.setState({
                hours: date.hours,
                minutes: date.minutes,
                seconds: date.seconds
            })
            
            console.log("ClockTime");
        }, 1000)

        return {
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    render() {
        return (
            <div className="clock-field">
                <div>
                    <p className="hours">{this.state.hours}</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>{this.state.minutes}</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>{this.state.seconds}</p>
                    <p className="placeholder"></p>
                </div>
                <div className="AmPm">
                    <div>
                        {/* <p className={this.props.session === 'am' ? 'on' : 'off'}>am</p> */}
                    </div>
                    <div>
                        {/* <p className={this.props.session === 'pm' ? 'on' : 'off'}>pm</p> */}
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        setInterval(function(){
            let date = new Date();
            this.setState({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            })
            console.log("DidMount");
        }, 1000)

        console.log('[MOUNT04]: componentDidMount() : 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후, 다른 자바스크립트 라이브러리 또는 프레임워크 함수 호출 또는 이벤트, 타이머, 통신 등에 사용');
    }

    /**
     *  컴포넌트를 DOM에서 제거 할 때
     *  componentDidMount 에서 등록한 이벤트, 타이머, 직접 생성한 DOM 엘리멘트등을 제거(Clean-Up)
     *  작업을 한다.
     */
    componentWillUnmount() {
        console.log('[UNMOUNT]: componentWillUnmount()', ComponentWillUnmount);
    }
}