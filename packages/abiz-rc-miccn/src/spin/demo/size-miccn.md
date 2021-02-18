```tsx
/**
 * title: 各种大小
 * desc: 小的用于文本加载，默认用于卡片容器级加载，大的用于**页面级**加载。
 */

import React from 'react';
import { ConfigProvider, Spin, Space } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <Space size="middle">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Space>
    </ConfigProvider>
  );
};
```
