import React from 'react';
import {ConfigProvider} from '@abiz/rc-core';

export default ({children, ...otherPorps})=>{
    return (
        <ConfigProvider prefixCls="jxc" {...otherPorps}>
            {children}
        </ConfigProvider>
    )
}