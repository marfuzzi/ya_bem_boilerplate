import React from 'react';
import { decl } from 'bem-react-core';
import TextTruncate from 'react-text-truncate';

export default decl({
    block: 'Info',
    elem: 'Description',
    cls: 'YSText-Regular',
    content({description}) {
        return (
            <TextTruncate
                line={3}
                truncateText="…"
                text={description}
            />
        );
    }
});
