---
order: 0
---

```tsx
/**
 * title: 基本
 * desc: 最简单的用法，在浮层中可以选择或者输入日期。
 */

import React from 'react';
import { ConfigProvider, DatePicker, Space } from '@abiz/rc-jxc';

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default () => {
  return (
    <ConfigProvider>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker="week" />
        <DatePicker onChange={onChange} picker="month" />
        <DatePicker onChange={onChange} picker="quarter" />
        <DatePicker onChange={onChange} picker="year" />
      </Space>
    </ConfigProvider>
  );
};
```
