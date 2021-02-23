import React from 'react';
import { ConfigProvider } from '@abiz/rc-core';

export default React.forwardRef(({ children, ...otherProps }, ref) => {
  return (
    <ConfigProvider prefixCls="jxc" forwardedRef={ref} {...otherProps}>
      {children}
    </ConfigProvider>
  );
});
