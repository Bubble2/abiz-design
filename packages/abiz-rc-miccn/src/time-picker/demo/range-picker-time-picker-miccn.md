---
order: 13
---

```tsx
/**
 * title: 范围选择器
 * desc: 通过`RangePicker`使用时间范围选择器。
 */

import React from 'react';
import { ConfigProvider, TimePicker } from '@abiz/rc-miccn';

const { RangePicker } = TimePicker;

export default () => {
  return (
    <ConfigProvider>
      <RangePicker />
    </ConfigProvider>
  );
};
```
