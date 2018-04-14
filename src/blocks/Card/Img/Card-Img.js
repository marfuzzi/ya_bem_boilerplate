import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

function getImage(path, multiplier) {
    const arrPath = path.split('.');
    if (multiplier) {return `${arrPath[0]}@${multiplier}x.png`}
    return `${arrPath[0]}@2x.png 2x, ${arrPath[0]}@3x.png 3x`;
}

export default decl({
    block: 'Card',
    elem: 'Img',
    tag: 'picture',
    content({image, title}) {
        return (
            <Fragment>
                <source srcSet={getImage(image, 2)}/>
                <img src={image} srcSet={getImage(image)} alt={title} className="Card-Img"/>
            </Fragment>
        );
    }
});
