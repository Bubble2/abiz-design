---
order: 0
---

```tsx
/**
 * title: 基本
 * desc: 数字输入框。
 */

import React from 'react';
import { ConfigProvider, InputNumber } from '@abiz/rc-jxc';

function onChange(value) {
  console.log('changed', value);
}

export default () => {
  return (
    <ConfigProvider>
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    </ConfigProvider>
  );
};
```
