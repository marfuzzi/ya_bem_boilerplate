import React from 'react'
import { declMod } from 'bem-react-core'

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

        content() {
            return <div> Средняя карточка</div>
        },
    },
)
