---
order: 2
---

```tsx
/**
 * title: 日期格式
 * desc: 使用 `format` 属性，可以自定义日期显示格式。
 */

import React from 'react';
import { ConfigProvider, DatePicker, Space } from '@abiz/rc-jxc';
import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const customFormat = value => `custom format: ${value.format(dateFormat)}`;

export default () => {
  return (
    <ConfigProvider>
      <Space direction="vertical" size={12}>
        <DatePicker
          defaultValue={moment('2015/01/01', dateFormat)}
          format={dateFormat}
        />
        <DatePicker
          defaultValue={moment('01/01/2015', dateFormatList[0])}
          format={dateFormatList}
        />
        <DatePicker
          defaultValue={moment('2015/01', monthFormat)}
          format={monthFormat}
          picker="month"
        />
        <RangePicker
          defaultValue={[
            moment('2015/01/01', dateFormat),
            moment('2015/01/01', dateFormat),
          ]}
          format={dateFormat}
        />
        <DatePicker
          defaultValue={moment('2015/01/01', dateFormat)}
          format={customFormat}
        />
      </Space>
    </ConfigProvider>
  );
};
```
