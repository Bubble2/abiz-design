import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import './iconfont';
export * from '@ant-design/icons';

const Icon = React.forwardRef((props, ref) => {
  const IconFont = createFromIconfontCN({});
  return <IconFont {...props} forwardedRef={ref} />;
});

export default Icon;
