---
order: 0
---

```tsx
/**
 * title: 基本使用
 * desc: 基本使用。
 */

import React from 'react';
import { ConfigProvider, Select } from '@abiz/rc-aeps';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default () => {
  return (
    <ConfigProvider>
      <>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} disabled>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} loading>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
          <Option value="lucy">Lucy</Option>
        </Select>
      </>
    </ConfigProvider>
  );
};
```
