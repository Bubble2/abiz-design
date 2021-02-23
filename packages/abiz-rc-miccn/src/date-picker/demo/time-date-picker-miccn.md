---
order: 3
---

```tsx
/**
 * title: 日期时间选择
 * desc: 增加选择时间功能，当`showTime`为一个对象时，其属性会传递给内建的`TimePicker`。
 */

import React from 'react';
import { ConfigProvider, DatePicker, Space } from '@abiz/rc-miccn';

const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

export default () => {
  return (
    <ConfigProvider>
      <Space direction="vertical" size={12}>
        <DatePicker showTime onChange={onChange} onOk={onOk} />
        <RangePicker
          showTime={{ format: 'HH:mm' }}
          format="YYYY-MM-DD HH:mm"
          onChange={onChange}
          onOk={onOk}
        />
      </Space>
    </ConfigProvider>
  );
};
```
