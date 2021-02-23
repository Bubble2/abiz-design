---
order: 0
---

```tsx
/**
 * title: 基本
 * desc: 最简单的用法，适用于简短的警告提示。
 */

import React from 'react';
import { ConfigProvider, Alert } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Alert message="Success Text" type="success" />
    </ConfigProvider>
  );
};
```
