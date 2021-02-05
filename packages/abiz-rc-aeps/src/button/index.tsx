import React from 'react';
import { Button } from '@abiz/rc-core';

export default ({ children, ...otherProps }) => {
  return (
    <Button {...otherProps}>
      {children}
    </Button>
  );
};
