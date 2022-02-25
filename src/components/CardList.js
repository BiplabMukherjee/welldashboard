import React from 'react';
import Card from './Card';

const CardList = ({robots})=>{
    const cardsArray = robots.map((user,i)=>{
        return <Card key = {i}  name={user}/>
    })
    return(
        <div>
            {cardsArray}       
        </div>
    );
}

export default CardList;