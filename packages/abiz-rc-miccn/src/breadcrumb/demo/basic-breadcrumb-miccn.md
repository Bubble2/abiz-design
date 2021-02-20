---
order: 0
---

```tsx
/**
 * title: 基本
 * desc: 最简单的用法。
 */

import React from 'react';
import { ConfigProvider, Breadcrumb } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </ConfigProvider>
  );
};
```
