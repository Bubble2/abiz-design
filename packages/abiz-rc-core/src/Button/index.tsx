import React from 'react';
import { Button } from 'antd';

export default ({ children, ...otherProps }) => {
  return <Button {...otherProps}>{children}</Button>;
};
