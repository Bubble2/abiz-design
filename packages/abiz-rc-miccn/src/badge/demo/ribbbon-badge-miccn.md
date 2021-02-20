---
order: 15
---

```tsx
/**
 * title: 缎带
 * desc: 使用缎带型的徽标。
 */

import React from 'react';
import { ConfigProvider, Badge, Card } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <Badge.Ribbon text="Pushes open the window">
        <Card>And raises the spyglass.</Card>
      </Badge.Ribbon>
    </ConfigProvider>
  );
};
```
