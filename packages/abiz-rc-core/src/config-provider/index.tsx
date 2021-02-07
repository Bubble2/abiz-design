import React from 'react';
import { ConfigProvider } from 'antd';

export default React.forwardRef(({ children, ...otherProps }, ref)=>{
    return (
      <ConfigProvider prefixCls="abiz-core" forwardedRef={ref} {...otherProps}>
        {children}
      </ConfigProvider>
    );
  });
  
