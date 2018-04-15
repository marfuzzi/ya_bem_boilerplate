import React from 'react';
import { decl } from 'bem-react-core';
import TextTruncate from 'react-text-truncate';

export default decl({
    block: 'Card',
    elem: 'Title',
    cls: 'YSText-Bold',
    style({titleColor}) { return { color:titleColor }},
    content({title}) {
        return (
            <TextTruncate
                line={2}
                truncateText="…"
                text={title}
            />
        )
    }
});
