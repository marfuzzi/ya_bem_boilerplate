import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Action from 'b:Info e:Action';
import Description from 'b:Info e:Description';

export default decl({
    block: 'Card',
    elem: 'Info',
    mix : { block : 'Info'},
    content({description}) {
        return (
            <Fragment>
                <Description description={description}/>
                <Action />
            </Fragment>
        );
    }
});
