import React from 'react';
import { decl, Bem } from 'bem-react-core';

import 'e:Logo';
import logoSvg from '../Logo/App-Logo.svg';

export default decl({
    block: 'App',
    elem: 'Header',
    tag: 'header',
    content() {
        return (
            <Bem elem="Logo" tag="img" src={logoSvg} alt="logo"/>
        );
    }
});
