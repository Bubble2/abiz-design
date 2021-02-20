---
order: 4
---

```tsx
/**
 * title: 选择时分
 * desc: TimePicker 浮层中的列会随着 `format` 变化，当略去 `format` 中的某部分时，浮层中对应的列也会消失。
 */

import React from 'react';
import { ConfigProvider, TimePicker } from '@abiz/rc-aeps';
import moment from 'moment';

const format = 'HH:mm';

export default () => {
  return (
    <ConfigProvider>
      <TimePicker defaultValue={moment('12:08', format)} format={format} />
    </ConfigProvider>
  );
};
```
