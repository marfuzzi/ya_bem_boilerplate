import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Header from 'e:Header';
import Content from 'e:Content';

export default decl({
    block: 'App',
    content() {
        return (
        <Fragment>
                <Header/>
                <Content/>
        </Fragment>
        );
    }
});
