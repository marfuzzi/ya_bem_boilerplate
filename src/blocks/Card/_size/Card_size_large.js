import React, { Fragment } from 'react';
import { declMod } from 'bem-react-core'

import Content from 'e:Content';
import Img from 'e:Img';

export default declMod(
    { size: 'large' },
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
                    <Img
                        image = {card.image}
                        title = {card.title}
                    />
                    <Content
                        title = {card.title}
                        titleColor = {card.titleColor}
                        description = {card.description}
                        length = {4}
                    />
                </Fragment>
              );
        },
    },
)
