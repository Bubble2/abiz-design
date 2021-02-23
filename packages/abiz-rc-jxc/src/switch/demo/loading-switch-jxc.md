---
order: 4
---

```tsx
/**
 * title: 加载中
 * desc: 标识开关操作仍在执行中。
 */

import React from 'react';
import { ConfigProvider, Switch } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Switch loading defaultChecked />
        <br />
        <Switch size="small" loading />
      </>
    </ConfigProvider>
  );
};
```
