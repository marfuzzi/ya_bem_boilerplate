import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Header from 'e:Header';

export default decl({
  block: 'App',
  content() {
    return (
      <Fragment>
        <Header/>
        <Bem elem="Intro">
          DESKTOP
        </Bem>
      </Fragment>
    );
  }
});
