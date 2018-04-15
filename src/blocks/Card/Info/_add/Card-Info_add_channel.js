import React, { Fragment } from 'react';
import { declMod } from 'bem-react-core'

import Action from 'b:Info e:Action';
import Channel from 'b:Info e:Channel';
import Description from 'b:Info e:Description';

export default declMod(
    { add: 'channel' },
    {
        block: 'Card',
        elem: 'Info',
        mix : { block : 'Info'},
        mods({ add }) {
            return {
                ...this.__base(...arguments),
                add,
            }
        },
        content({length, description, channel}) {
            return (
                <Fragment>
                    <Description description={description} length={length}/>
                    <Channel channel={channel}/>
                    <Action />
                </Fragment>
            );
        }
    },
)
