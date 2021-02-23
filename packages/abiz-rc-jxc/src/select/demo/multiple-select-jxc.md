---
order: 2
---

```tsx
/**
 * title: 多选
 * desc: 多选，从已有条目中选择。
 */

import React from 'react';
import { ConfigProvider, Select } from '@abiz/rc-jxc';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default () => {
  return (
    <ConfigProvider>
      <>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
        >
          {children}
        </Select>
        <br />
        <Select
          mode="multiple"
          disabled
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
        >
          {children}
        </Select>
      </>
    </ConfigProvider>
  );
};
```
