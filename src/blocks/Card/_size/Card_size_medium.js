import React, { Fragment } from 'react';
import { declMod } from 'bem-react-core'

import Title from 'e:Title';
import Img from 'e:Img';
import Info from 'e:Info';

export default declMod(
    { size: 'medium' },
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
                    <Img
                        image = {card.image}
                        title = {card.title}
                    />
                    <Info
                        description = {card.description}
                        length = {3}
                    />
                </Fragment>
              );
        },
    },
)
