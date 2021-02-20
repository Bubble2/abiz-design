---
order: 4
---

```tsx
/**
 * title: 迷你
 * desc: 迷你版本。
 */

import React from 'react';
import { ConfigProvider, Pagination } from '@abiz/rc-aeps';

function showTotal(total) {
  return `Total ${total} items`;
}

export default () => {
  return (
    <ConfigProvider>
      <>
        <Pagination size="small" total={50} />
        <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        <Pagination size="small" total={50} showTotal={showTotal} />
        <Pagination
          size="small"
          total={50}
          disabled
          showTotal={showTotal}
          showSizeChanger
          showQuickJumper
        />
      </>
    </ConfigProvider>
  );
};
```
