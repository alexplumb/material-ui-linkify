# material-ui-linkify
Converts links in text to Material-UI Links using the Markdown-it Linkify-it library
Uses https://github.com/markdown-it/linkify-it
Inspired by https://github.com/tasti/react-linkify/

## Installation

```shell-script
npm install material-ui-linkify --save
```

## Usage
### To use Material-UI-Linkify, add it ahead of any component you think might contain links
```
<MuiLinkify>
  <Typography variant="body1">
    See source code at https://github.com/alexplumb/material-ui-linkify
  </Typography>
</MuiLinkify>
```

### Properties
**schema** - A linkify-it schema for adding linkify processors. Example for adding Twitter:
```
{
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
}
```

**options**: See https://github.com/markdown-it/linkify-it#new-linkifyitschemas-options for options

**LinkProps**: Properties that you want to pass along to the Link component. See https://material-ui.com/api/link/ for the full API

**hostnameOnly**: Forces certain schemas to only display the hostnames for matched links (boolean, default: false)

**hostnameSchemas**: When `hostnameOnly` is set to `true`, pass an array of schemas that determines which types of URLs to be truncated. (default: `https:, http:, ftp:, //`)

## Notes
This library requires the [URL interface](https://developer.mozilla.org/en-US/docs/Web/API/URL). If you need to support IE, make sure to install a polyfill.

## License
Uses the [MIT License](https://opensource.org/licenses/MIT)
