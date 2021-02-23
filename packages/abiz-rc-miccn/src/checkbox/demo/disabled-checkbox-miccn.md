---
order: 1
---

```tsx
/**
 * title: 不可用
 * desc: checkbox不可用。
 */

import React from 'react';
import { ConfigProvider, Checkbox } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Checkbox defaultChecked={false} disabled />
        <br />
        <Checkbox defaultChecked disabled />
      </>
    </ConfigProvider>
  );
};
```
