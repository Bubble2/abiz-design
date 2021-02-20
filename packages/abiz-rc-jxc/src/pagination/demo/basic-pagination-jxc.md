---
order: 0
---

```tsx
/**
 * title: 基本
 * desc: 基础分页。
 */

import React from 'react';
import { ConfigProvider, Pagination } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Pagination defaultCurrent={1} total={50} />
    </ConfigProvider>
  );
};
```
