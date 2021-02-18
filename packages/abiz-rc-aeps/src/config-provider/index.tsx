import React from 'react';
import { ConfigProvider } from '@abiz/rc-core';

export default React.forwardRef(({ children, ...otherProps }, ref) => {
  return (
    <ConfigProvider prefixCls="aeps" forwardedRef={ref} {...otherProps}>
      {children}
    </ConfigProvider>
  );
});
