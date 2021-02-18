```tsx
/**
 * title: 垂直间距
 * desc: 相邻组件垂直间距。
 */

import React from 'react';
import { ConfigProvider, Space, Card } from '@abiz/rc-aeps';

function SpaceVertical() {
  return (
    <Space direction="vertical">
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  );
}

export default () => {
  return (
    <ConfigProvider>
      <SpaceVertical />
    </ConfigProvider>
  );
};
```
