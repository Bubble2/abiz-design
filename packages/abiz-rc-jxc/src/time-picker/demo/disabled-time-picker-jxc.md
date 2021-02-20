---
order: 3
---

```tsx
/**
 * title: 禁用
 * desc: 禁用时间选择。
 */

import React from 'react';
import { ConfigProvider, TimePicker } from '@abiz/rc-jxc';
import moment from 'moment';

export default () => {
  return (
    <ConfigProvider>
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
    </ConfigProvider>
  );
};
```
