```tsx
/**
 * title: 步长选项
 * desc: 可以使用 `hourStep` `minuteStep` `secondStep` 按步长展示可选的时分秒。
 */

import React from 'react';
import { ConfigProvider, TimePicker } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <TimePicker minuteStep={15} secondStep={10} />
    </ConfigProvider>
  );
};
```
