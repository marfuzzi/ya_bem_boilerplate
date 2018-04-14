import React from 'react'
import { declMod } from 'bem-react-core'

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
            return <div>Большая карточка</div>
        },
    },
)
