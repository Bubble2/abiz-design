---
order: 3
---

```tsx
/**
 * title: 两种大小
 * desc: <span></span>`size="small"` 表示小号开关。
 */

import React from 'react';
import { ConfigProvider, Switch } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Switch defaultChecked />
        <br />
        <Switch size="small" defaultChecked />
      </>
    </ConfigProvider>
  );
};
```
