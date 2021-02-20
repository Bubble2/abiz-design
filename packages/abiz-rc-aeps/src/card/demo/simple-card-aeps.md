---
order: 2
---

```tsx
/**
 * title: 简洁卡片
 * desc: 只包含内容区域。
 */

import React from 'react';
import { ConfigProvider, Card } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <Card style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </ConfigProvider>
  );
};
```
