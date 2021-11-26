import React from 'react';
import cards from './data.json';

export default function(){
    console.log(cards);

    const a = cards.filter((card)=>card.status === 'ToDo');

    return (
        <div className='KanbanBoard'>
            칸반보드!!!
            <CardList key='ToDo' cards={} />
            <CardList key='Doing' cards={} />
            <CardList key='Run' cards={} />
        </div>
    )
}