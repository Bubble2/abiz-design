```tsx
/**
 * title: 无边框
 * desc: 无边框样式。
 */

import React from 'react';
import { ConfigProvider, TimePicker } from '@abiz/rc-miccn';

const { RangePicker } = TimePicker;

export default () => {
  return (
    <ConfigProvider>
      <>
        <TimePicker bordered={false} />
        <RangePicker bordered={false} />
      </>
    </ConfigProvider>
  );
};
```
