```tsx
/**
 * title: 基本
 * desc: 最简单的占位效果。
 */

import React from 'react';
import { ConfigProvider, Skeleton } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Skeleton />
    </ConfigProvider>
  );
};
```
