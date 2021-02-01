import React from 'react';
import {ConfigProvider} from 'antd';

export default ({children, ...otherPorps})=>{
    return (
        <ConfigProvider {...otherPorps}>
            {children}
        </ConfigProvider>
    )
}