import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Title from 'e:Title';
import Info from 'e:Info';

export default decl({
    block: 'Card',
    elem: 'Content',
    content({title, titleColor, description, length}) {
        return (
            <Fragment>
                <Title
                titleColor = {titleColor}
                title = {title}
                />
                <Info
                    description = {description}
                    length = {length}
                />
            </Fragment>
        );
    }
});
