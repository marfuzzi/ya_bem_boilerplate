import { decl } from 'bem-react-core';

export default decl({
    block: 'Info',
    elem: 'Channel',
    cls: 'YSText-Regular',
    tag: 'div',
    content({channel}) {
        return (
            channel
        )
    },
});
