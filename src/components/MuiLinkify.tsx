import React from 'react';
import PropTypes from 'prop-types';
import MuiLink from '@mui/material/Link';
import LinkifyIt from 'linkify-it';
import tlds from 'tlds';
import URL from 'urlutils';

const defaultHostnameSchemas = [
  'http:',
  'https:',
  'ftp:',
  '//',
];

const MuiLinkify: React.FunctionComponent<{
  children: React.ReactNode,
  schema?: LinkifyIt.SchemaRules,
  options?: LinkifyIt.Options,
  includeTLDs?: boolean,
  hostnameOnly?: boolean,
  hostnameSchemas?: string[],
  LinkProps?: any,
}> = ({
  children,
  schema = {},
  options = {},
  includeTLDs = true,
  hostnameOnly = false,
  hostnameSchemas = defaultHostnameSchemas,
  LinkProps = {},
}) => {
  const linkify = new LinkifyIt(schema, options);

  if (includeTLDs === true) {
    linkify.tlds(tlds);
  }

  const parseString = (string: string) => {
    if (string === ''
    || string === null
    || string === undefined
    || typeof string === 'undefined') {
      return '';
    }

    const matches = linkify.match(string);

    if (!matches) {
      return string;
    }

    const elements = [];
    let lastIndex = 0;

    matches.forEach((match, i) => {
      // Push preceding text if there is any
      if (match.index > lastIndex) {
        elements.push(string.substring(lastIndex, match.index));
      }

      let { text } = match;

      if (
        hostnameOnly === true
        && Array.isArray(hostnameSchemas)
        && hostnameSchemas.indexOf(match.schema) !== -1
      ) {
        const urlObject = new URL(match.url);

        text = urlObject.hostname;
      }

      const component = (
        <MuiLink
          href={match.url}
          key={i}
          {...LinkProps}
        >
          {text}
        </MuiLink>
      );

      elements.push(component);

      lastIndex = match.lastIndex;
    });

    // Push remaining text if there is any
    if (string.length > lastIndex) {
      elements.push(string.substring(lastIndex));
    }

    return (elements.length === 1) ? elements[0] : elements;
  };

  const parse = (childNodes: any, key: number = 0) => {
    if (typeof childNodes === 'string') {
      return parseString(childNodes);
    }

    if (
      React.isValidElement(childNodes)
      && childNodes.type !== 'a'
      && childNodes.type !== 'button'
    ) {
      const { props, type }: { props: any, type: any } = childNodes;

      if ({}.toString.call(childNodes.type) === '[object Function]') {
        const { displayName } = type;

        if (displayName === 'WithStyles(Link)') {
          return childNodes;
        }
      }

      return React.cloneElement(childNodes, { key }, parse(props.children));
    }

    if (Array.isArray(childNodes)) {
      return childNodes.map((child, i) => parse(child, i));
    }

    return childNodes;
  };

  return parse(children);
};

MuiLinkify.propTypes = {
  children: PropTypes.node.isRequired,
  schema: PropTypes.any,
  options: PropTypes.object,
  includeTLDs: PropTypes.bool,
  LinkProps: PropTypes.object,
  hostnameOnly: PropTypes.bool,
  hostnameSchemas: PropTypes.arrayOf(PropTypes.string),
};

MuiLinkify.defaultProps = {
  children: <div />,
  schema: {},
  options: {},
  includeTLDs: true,
  LinkProps: {},
  hostnameOnly: false,
  hostnameSchemas: defaultHostnameSchemas,
};

MuiLinkify.displayName = 'MuiLinkify';

export default MuiLinkify;
