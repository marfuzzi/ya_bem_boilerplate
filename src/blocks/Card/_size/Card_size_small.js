import React from 'react'
import { declMod } from 'bem-react-core'

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

        content() {
            return <div>Маленькая карточка</div>
        },
    },
)
