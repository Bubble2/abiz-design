import React from 'react';
import {ConfigProvider} from '@abiz/rc-core';

export default ({children, ...otherProps})=>{
    return (
        <ConfigProvider prefixCls="miccn" {...otherProps}>
            {children}
        </ConfigProvider>
    )
}