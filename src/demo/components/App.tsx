import React from 'react';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import MuiLinkify from '../../components/MuiLinkify';

const schema = {
  '@': {
    validate (text, pos, self) {
      const tail = text.slice(pos);

      if (!self.re.twitter) {
        self.re.twitter =  new RegExp(
          `^([a-zA-Z0-9_]){1,15}(?!_)(?=$|${self.re.src_ZPCc})`,
        );
      }
      if (self.re.twitter.test(tail)) {
        // Linkifier allows punctuation chars before prefix,
        // but we additionally disable `@` ("@@mention" is invalid)
        if (pos >= 2 && tail[pos - 2] === '@') {
          return false;
        }
        return tail.match(self.re.twitter)[0].length;
      }
      return 0;
    },
    normalize: (match) => {
      match.url = `https://twitter.com/${match.url.replace(/^@/, '')}`;
    },
  },
};

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
      paragraph
    >
      <MuiLinkify
        hostnameOnly
        LinkProps={{
          variant: 'body1',
          target: '_blank',
        }}
      >
        See source code at https://github.com/alexplumb/material-ui-linkify
      </MuiLinkify>
    </Typography>

    <div>
      <MuiLinkify
        schema={schema}
        LinkProps={{
          variant: 'subtitle2',
          color: 'secondary',
        }}
      >
        @Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Proin maximus arcu a turpis lacinia, id tristique massa lobortis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer quis lacus sed erat interdum mattis.
        Pellentesque in lectus vitae est semper fringilla.
        Phasellus ante magna, sagittis a pellentesque eget, pulvinar quis massa.
        Nunc id leo turpis. Sed ac augue sollicitudin, volutpat arcu vitae, pretium libero.
        Vestibulum ac ultrices sem, vel finibus diam. Fusce vehicula mattis tellus in feugiat.
        Cras auctor ultrices orci, ac vehicula tellus dapibus sit amet. Sed nec diam ligula.
        Nullam lobortis posuere nibh, a lobortis diam luctus et.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nullam ultrices leo mi, a posuere dui faucibus vel.
        Nam vitae turpis eget risus sodales varius.
      </MuiLinkify>
    </div>
  </>
);
