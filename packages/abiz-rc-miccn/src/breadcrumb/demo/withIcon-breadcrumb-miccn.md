---
order: 1
---

```tsx
/**
 * title: 带有图标的
 * desc: 图标放在文字前面。
 */

import React from 'react';
import { ConfigProvider, Breadcrumb } from '@abiz/rc-miccn';
import { HomeOutlined, UserOutlined } from '@abiz/icons-miccn';

export default () => {
  return (
    <ConfigProvider>
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <UserOutlined />
          <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
      </Breadcrumb>
    </ConfigProvider>
  );
};
```
