```tsx
/**
 * title: 基本用法
 * desc: 一个简单的 loading 状态。
 */

import React from 'react';
import { ConfigProvider, Spin } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <Spin />
    </ConfigProvider>
  );
};
```
