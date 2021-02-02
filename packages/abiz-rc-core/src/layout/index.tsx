import React from 'react';
import {Layout} from 'antd';

export default ({children, ...otherProps}) => {
  return (
    <Layout {...otherProps}>{children}</Layout>
  )
}
