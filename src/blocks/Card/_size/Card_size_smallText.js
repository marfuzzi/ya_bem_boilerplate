import React, { Fragment } from 'react';
import { declMod } from 'bem-react-core'

import Title from 'e:Title';
//import Img from 'e:Img';
import Info from 'e:Info m:size=channel';
//import Card from 'b:Card m:size=smallText|small|medium|large';

export default declMod(
    { size: 'smallText' },
    {
        block: 'Card',
        mods({ size }) {
            return {
                ...this.__base(...arguments),
                size,
            }
        },
        content({ card }) {
            return (
                <Fragment>
                    <Title
                        titleColor = {card.titleColor}
                        title = {card.title}
                    />
                    <Info size='channel'
                        channel = {card.channelName}
                        description = {card.description}
                        length = {10}
                    />
                </Fragment>
              );
        },
    },
)
