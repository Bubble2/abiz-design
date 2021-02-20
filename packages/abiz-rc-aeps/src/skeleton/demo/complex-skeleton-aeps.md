---
order: 1
---

```tsx
/**
 * title: 复杂的组合
 * desc: 更复杂的组合。
 */

import React from 'react';
import { ConfigProvider, Skeleton } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <Skeleton avatar paragraph={{ rows: 4 }} />
    </ConfigProvider>
  );
};
```
