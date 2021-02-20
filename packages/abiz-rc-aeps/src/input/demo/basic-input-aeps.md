---
order: 0
---

```tsx
/**
 * title: 基本使用
 * desc: 基本使用。
 */

import React from 'react';
import { ConfigProvider, Input } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <Input placeholder="Basic usage" />
    </ConfigProvider>
  );
};
```
