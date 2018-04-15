import React, { Fragment } from 'react';
import { declMod } from 'bem-react-core'

import Title from 'e:Title';

export default declMod(
    { size: 'small-text' },
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
                </Fragment>
              );
        },
    },
)
