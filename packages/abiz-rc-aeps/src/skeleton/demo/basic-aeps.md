```tsx
/**
 * title: 基本
 * desc: 最简单的占位效果。
 */

import React from 'react';
import { ConfigProvider, Skeleton } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <Skeleton />
    </ConfigProvider>
  );
};
```
