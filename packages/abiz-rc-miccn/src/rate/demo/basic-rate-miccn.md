---
order: 0
---

```tsx
/**
 * title: 基本
 * desc: 最简单的用法。
 */

import React from 'react';
import { ConfigProvider, Rate } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <Rate />
    </ConfigProvider>
  );
};
```
