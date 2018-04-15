import React, {Fragment} from 'react';
import { decl } from 'bem-react-core';
import data from './data';
import Card from 'b:Card m:size=smallText|small|medium|large';

const cards = data.map((card,index) => {
    switch(card.size) {
        case 's':
            if (card.image) {return <Card size='small' key={index} card={card}/>}
            return <Card size='smallText' key={index} card={card}/>
        case 'm': return <Card size='medium' key={index} card={card}/>
        case 'l': return <Card size='large' key={index} card={card}/>
        default: return null;
    }
})

export default decl({
    block: 'Content',
    content() {
        return (
            <Fragment>
                {cards}
            </Fragment>
        );
    }
});
