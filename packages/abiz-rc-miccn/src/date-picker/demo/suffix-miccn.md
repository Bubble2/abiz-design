```tsx
/**
 * title: 后缀图标
 * desc: 最简单的用法，在浮层中可以选择或者输入日期。
 */

import React from 'react';
import { ConfigProvider, DatePicker, Space } from '@abiz/rc-miccn';
import { SmileOutlined } from '@ant-design/icons';

const smileIcon = <SmileOutlined />;
const { RangePicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default () => {
  return (
    <ConfigProvider>
      <Space direction="vertical" size={12}>
        <DatePicker suffixIcon={smileIcon} onChange={onChange} />
        <DatePicker suffixIcon={smileIcon} onChange={onChange} picker="month" />
        <RangePicker suffixIcon={smileIcon} onChange={onChange} />
        <DatePicker suffixIcon={smileIcon} onChange={onChange} picker="week" />
        <DatePicker suffixIcon="ab" onChange={onChange} />
        <DatePicker suffixIcon="ab" onChange={onChange} picker="month" />
        <RangePicker suffixIcon="ab" onChange={onChange} />
        <DatePicker suffixIcon="ab" onChange={onChange} picker="week" />
      </Space>
    </ConfigProvider>
  );
};
```
