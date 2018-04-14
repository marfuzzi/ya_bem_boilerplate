import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
    block: 'Card',
    elem: 'Img',
    tag: 'picture',
    content({image, title}) {
        return (
            <Fragment>
                <img src={image} srcSet={image} alt={title} className="Card-Img"/>
            </Fragment>
        );
    }
});
