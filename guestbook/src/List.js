import React from 'react';
import ListItem from './ListItem';
import Lists from '../assets/json/data.json';

// 함수라서 함수 인자로 받아야 함
export default function() {
    return (
        <ul className="Guestbook__List">
            { Lists.map((list) => <ListItem
                                    title = {list.title}
                                    content = {list.content} />) }   
        </ul>
    )
}