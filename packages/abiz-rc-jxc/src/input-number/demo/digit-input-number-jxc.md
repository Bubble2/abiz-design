---
order: 3
---

```tsx
/**
 * title: 小数
 * desc: 和原生的数字输入框一样，value 的精度由 step 的小数位数决定。
 */

import React from 'react';
import { ConfigProvider, InputNumber } from '@abiz/rc-jxc';

function onChange(value) {
  console.log('changed', value);
}

export default () => {
  return (
    <ConfigProvider>
      <InputNumber min={0} max={10} step={0.1} onChange={onChange} />
    </ConfigProvider>
  );
};
```
