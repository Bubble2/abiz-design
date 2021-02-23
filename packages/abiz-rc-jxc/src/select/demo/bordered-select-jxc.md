---
order: 23
---

```tsx
/**
 * title: 无边框
 * desc: 无边框样式。
 */

import React from 'react';
import { ConfigProvider, Select } from '@abiz/rc-jxc';

const { Option } = Select;

export default () => {
  return (
    <ConfigProvider>
      <>
        <Select defaultValue="lucy" style={{ width: 120 }} bordered={false}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          disabled
          bordered={false}
        >
          <Option value="lucy">Lucy</Option>
        </Select>
      </>
    </ConfigProvider>
  );
};
```
