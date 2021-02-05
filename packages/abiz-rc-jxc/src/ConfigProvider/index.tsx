import React from 'react';
import { ConfigProvider } from '@abiz/rc-core';

export default class extends React.Component {
  render(){
    const { children, ...otherProps } = this.props;
    return (
      <ConfigProvider prefixCls="jxc" {...otherProps}>
        {children}
      </ConfigProvider>
    );
  }
};
