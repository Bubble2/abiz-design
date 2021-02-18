```tsx
/**
 * title: 无边框
 * desc: 无边框样式。
 */

import React from 'react';
import { ConfigProvider, DatePicker, Space } from '@abiz/rc-jxc';

const { RangePicker } = DatePicker;

export default () => {
  return (
    <ConfigProvider>
      <Space direction="vertical" size={12}>
        <DatePicker bordered={false} />
        <DatePicker picker="week" bordered={false} />
        <DatePicker picker="month" bordered={false} />
        <DatePicker picker="year" bordered={false} />
        <RangePicker bordered={false} />
        <RangePicker picker="week" bordered={false} />
        <RangePicker picker="month" bordered={false} />
        <RangePicker picker="year" bordered={false} />
      </Space>
    </ConfigProvider>
  );
};
```
