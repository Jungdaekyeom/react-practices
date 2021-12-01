import React from 'react';

import Form from './Form'
import List from './List'

export default function () {
    return (
        <div className="Guestbook">
            <h1>방명록</h1>
            <Form></Form>
            <List></List>
        </div>
    )
}