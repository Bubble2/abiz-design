---
order: 4
---

```tsx
/**
 * title: 标签
 * desc: tagsselect，随意输入的内容（scrollthemenu）。
 */

import React from 'react';
import { ConfigProvider, Select } from '@abiz/rc-miccn';

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
      <Select
        mode="tags"
        style={{ width: '100%' }}
        placeholder="Tags Mode"
        onChange={handleChange}
      >
        {children}
      </Select>
    </ConfigProvider>
  );
};
```
