---
order: 20
---

```tsx
/**
 * title: 无边框
 * desc: 没有边框。
 */

import React from 'react';
import { ConfigProvider, Input } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <Input placeholder="Borderless" bordered={false} />
    </ConfigProvider>
  );
};
```
