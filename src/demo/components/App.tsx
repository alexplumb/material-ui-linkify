import React from 'react';
import { Link as MuiLink } from '@material-ui/core';
import MuiLinkify from '../../components/MuiLinkify';

export default () => (
  <MuiLinkify>
    See source code at https://github.com/alexplumb/material-ui-linkify

    <div>
      See source code at https://github.com/alexplumb/material-ui-linkify

    </div>

    <MuiLink href="https://github.com/alexplumb/material-ui-linkify">
      https://github.com/alexplumb/material-ui-linkify
    </MuiLink>
  </MuiLinkify>
);
