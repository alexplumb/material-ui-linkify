import React from 'react';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import MuiLinkify from '../../components/MuiLinkify';

export default () => (
  <>
    <MuiLinkify>
      See source code at https://github.com/alexplumb/material-ui-linkify

      <div>
        See source code at https://github.com/alexplumb/material-ui-linkify

      </div>

      <MuiLink href="https://github.com/alexplumb/material-ui-linkify">
        https://github.com/alexplumb/material-ui-linkify
      </MuiLink>
    </MuiLinkify>

    <br />

    <Typography
      variant="h6"
    >
      <MuiLinkify
        LinkProps={{
          variant: 'body1',
          target: '_blank',
        }}
      >
        See source code at https://github.com/alexplumb/material-ui-linkify
      </MuiLinkify>
    </Typography>
  </>
);
