---
order: 0
---

```tsx
/**
 * title: 基本
 * desc: 最简单的用法。
 */

import React from 'react';
import { ConfigProvider, Switch } from '@abiz/rc-aeps';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

export default () => {
  return (
    <ConfigProvider>
      <Switch defaultChecked onChange={onChange} />
    </ConfigProvider>
  );
};
```
