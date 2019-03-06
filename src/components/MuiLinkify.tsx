import React from 'react';
import PropTypes from 'prop-types';
import { Link as MuiLink } from '@material-ui/core';
import LinkifyIt from 'linkify-it';
import tlds from 'tlds';

const linkify = new LinkifyIt();
linkify.tlds(tlds);

const MuiLinkify: React.FunctionComponent<{
  children: React.ReactNode,
  LinkProps?: any,
}> = ({ children, LinkProps = {} }) => {
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

      const component = (
        <MuiLink
          href={match.url}
          key={i}
          {...LinkProps}
        >
          {match.text}
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
  LinkProps: PropTypes.object,
};

MuiLinkify.defaultProps = {
  children: <div />,
  LinkProps: {},
};

export default MuiLinkify;
