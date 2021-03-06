import React, { Fragment } from 'react';
import { declMod } from 'bem-react-core'

import Title from 'e:Title';
import Img from 'e:Img';
import Action from 'e:Action';

export default declMod(
    { size: 'small' },
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
                    <div className='Card-Overlay'>
                        <Img
                            image = {card.image}
                            title = {card.title}
                        />
                        <Action/>
                    </div>
                </Fragment>
              );
        },
    },
)
