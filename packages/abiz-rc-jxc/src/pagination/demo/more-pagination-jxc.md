---
order: 1
---

```tsx
/**
 * title: 更多
 * desc: 更多分页。
 */

import React from 'react';
import { ConfigProvider, Pagination } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Pagination defaultCurrent={6} total={500} />
    </ConfigProvider>
  );
};
```
