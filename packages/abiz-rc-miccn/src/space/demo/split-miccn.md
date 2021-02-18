```tsx
/**
 * title: 分隔符
 * desc: 相邻组件分隔符。
 */

import React from 'react';
import { ConfigProvider, Space, Typography, Divider } from '@abiz/rc-miccn';

function SpaceSplit() {
  return (
    <Space split={<Divider type="vertical" />}>
      <Typography.Link>Link</Typography.Link>
      <Typography.Link>Link</Typography.Link>
      <Typography.Link>Link</Typography.Link>
    </Space>
  );
}

export default () => {
  return (
    <ConfigProvider>
      <SpaceSplit />
    </ConfigProvider>
  );
};
```
