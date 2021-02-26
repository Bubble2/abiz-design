---
order: 6
---

```tsx
/**
 * title: 无边框
 * desc: 没有边框。
 */

import React from 'react';
import { ConfigProvider, InputNumber } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <InputNumber min={1} max={10} defaultValue={3} bordered={false} />
    </ConfigProvider>
  );
};
```
