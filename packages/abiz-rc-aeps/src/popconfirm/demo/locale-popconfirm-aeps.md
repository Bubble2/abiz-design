---
order: 1
---

```tsx
/**
 * title: 国际化
 * desc: 使用 `okText` 和 `cancelText` 自定义按钮文字。
 */

import React from 'react';
import { ConfigProvider, Popconfirm } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
        <a href="#">Delete</a>
      </Popconfirm>
    </ConfigProvider>
  );
};
```
