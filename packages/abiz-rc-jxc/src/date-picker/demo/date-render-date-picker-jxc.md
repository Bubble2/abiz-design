---
order: 12
---

```tsx
/**
 * title: 定制日期单元格
 * desc: 使用`dateRender`可以自定义日期单元格的内容和样式。
 */

import React from 'react';
import { ConfigProvider, DatePicker, Space } from '@abiz/rc-jxc';

const { RangePicker } = DatePicker;

export default () => {
  return (
    <ConfigProvider>
      <Space direction="vertical" size={12}>
        <DatePicker
          dateRender={current => {
            const style = {};
            if (current.date() === 1) {
              style.border = '1px solid #1890ff';
              style.borderRadius = '50%';
            }
            return (
              <div className="ant-picker-cell-inner" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
        <RangePicker
          dateRender={current => {
            const style = {};
            if (current.date() === 1) {
              style.border = '1px solid #1890ff';
              style.borderRadius = '50%';
            }
            return (
              <div className="ant-picker-cell-inner" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
      </Space>
    </ConfigProvider>
  );
};
```
