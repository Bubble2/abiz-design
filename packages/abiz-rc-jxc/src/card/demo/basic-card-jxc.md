---
order: 0
---

```tsx
/**
 * title: 典型卡片
 * desc: 包含标题、内容、操作区域。
 */

import React from 'react';
import { ConfigProvider, Card } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card
          size="small"
          title="Small size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </>
    </ConfigProvider>
  );
};
```
