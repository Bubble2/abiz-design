```tsx
/**
 * title: 基本用法
 * desc: 简单的 checkbox。
 */

import React from 'react';
import { ConfigProvider, Checkbox } from '@abiz/rc-miccn';

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
