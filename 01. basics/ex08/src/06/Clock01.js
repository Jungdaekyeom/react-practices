import React, { Fragment } from 'react';

export default function () {

    const date = new Date();

    let hours = date.getHours();
    let minutes = (('0' + date.getMinutes()).slice(-2));
    let seconds = date.getSeconds();

    let session = 'AM';
    if (hours > 12) {
        session = 'PM';
    }

    // if(minutes < 10){
    //     minutes = '0' + minutes;
    // }

    return (
        <div>
            {hours} : {minutes} : {seconds < 10 ? '0' + seconds : seconds} {session}
            <br />
            {hours} : {minutes} : {('0' + seconds).slice(-2)} {session}
        </div>
    )
}