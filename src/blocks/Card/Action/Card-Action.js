import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Like from 'b:Action e:Like';
import More from 'b:Action e:More';

export default decl({
    block: 'Card',
    elem: 'Action',
    mix : { block : 'Action'},
    content({length, description}) {
        return (
            <Fragment>
                <More />
                <Like />
            </Fragment>
        );
    }
});
