---
order: 1
---

```tsx
/**
 * title: 范围选择器
 * desc: 通过设置`picker`属性，指定范围选择器类型。
 */

import React from 'react';
import { ConfigProvider, DatePicker, Space } from '@abiz/rc-aeps';

const { RangePicker } = DatePicker;

export default () => {
  return (
    <ConfigProvider>
      <Space direction="vertical" size={12}>
        <RangePicker />
        <RangePicker showTime />
        <RangePicker picker="week" />
        <RangePicker picker="month" />
        <RangePicker picker="year" />
      </Space>
    </ConfigProvider>
  );
};
```
