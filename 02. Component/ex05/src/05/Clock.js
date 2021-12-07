import React, { useState } from 'react';
import SevenSegmentLED from "./SevenSegmentLED";
import './assets/scss/Clock.scss';
export default function Clock() {

    // const [date, setDate] = useState();

    const date = new Date();
    const hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    setInterval(function () {
        console.log("1");
    }, 1000);

    return (
        <div className={'clock-display'}>
            <h2>Clock</h2>
            <div className={'Clock'}>
                <SevenSegmentLED number={hours} colon={true} />
                <SevenSegmentLED number={minutes} colon={true} />
                <SevenSegmentLED number={seconds} colon={false} />
            </div>
        </div>
    );
}