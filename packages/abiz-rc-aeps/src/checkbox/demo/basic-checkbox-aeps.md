---
order: 0
---

```tsx
/**
 * title: 基本用法
 * desc: 简单的checkbox。
 */

import React from 'react';
import { ConfigProvider, Checkbox } from '@abiz/rc-aeps';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export default () => {
  return (
    <ConfigProvider>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
    </ConfigProvider>
  );
};
```
