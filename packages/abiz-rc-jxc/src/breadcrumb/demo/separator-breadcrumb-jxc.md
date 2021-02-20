---
order: 4
---

```tsx
/**
 * title: 分隔符
 * desc: 使用 `separator=">"` 可以自定义分隔符。
 */

import React from 'react';
import { ConfigProvider, Breadcrumb } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
        <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </ConfigProvider>
  );
};
```
