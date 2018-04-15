import React, { Fragment } from 'react';
import { declMod } from 'bem-react-core'

import Title from 'e:Title';
import Info from 'e:Info m:add=channel';

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
                    <Info add='channel'
                        channel = {card.channelName}
                        description = {card.description}
                        length = {10}
                    />
                </Fragment>
              );
        },
    },
)
