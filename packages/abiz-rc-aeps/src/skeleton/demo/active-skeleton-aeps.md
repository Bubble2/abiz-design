---
order: 2
---

```tsx
/**
 * title: 动画效果
 * desc: 显示动画效果。
 */

import React from 'react';
import { ConfigProvider, Skeleton } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <Skeleton active />
    </ConfigProvider>
  );
};
```
