import React, { useEffect } from 'react';
import SevenSegmentLED from "./SevenSegmentLED";
import SessionAmPm from "./SessionAmPm";
import './assets/scss/Clock.scss';

export default function Clock({ message, hours, minutes, seconds }) {


    // 세븐 세그먼트 : 그 왜, 디지털 시계에 들어가는 LED 총 7개잖냐
    // colon : 중간에 생기는 점 두개요
    // sesstion 부분에 pm 대신 다른거 주면 에러
    return (
        <div className={'clock-display'}>
            <h2>{message}</h2>
            <div className={'Clock'}>
                <SevenSegmentLED number={hours} colon={true} />
                <SevenSegmentLED number={minutes} colon={true} />
                <SevenSegmentLED number={seconds} colon={false} />
                <SessionAmPm session={hours > 12 ? 'pm' : 'am'} />
            </div>
        </div>
    );
}