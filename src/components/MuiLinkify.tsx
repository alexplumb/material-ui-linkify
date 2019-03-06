import React, { useEffect, useState } from 'react';
import { Link as MuiLink } from '@material-ui/core';

export default ({ children, ...restProps }) => {
  const [parsedChildren, setParsedChildren] = useState(children);

  useEffect(
    () => {

    },
    [children],
  );

  return <div />;
};
