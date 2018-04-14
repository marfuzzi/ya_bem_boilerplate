import React from 'react';
import { decl } from 'bem-react-core';
import TextTruncate from 'react-text-truncate';

export default decl({
    block: 'Info',
    elem: 'Description',
    cls: 'YSText-Regular',
    content({length,description}) {
        return (
            <TextTruncate
                line={length}
                truncateText="…"
                text={description}
            />
        );
    }
});
