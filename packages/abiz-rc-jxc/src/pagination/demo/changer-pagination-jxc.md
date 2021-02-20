---
order: 2
---

```tsx
/**
 * title: 改变
 * desc: 改变每页显示条目数。
 */

import React from 'react';
import { ConfigProvider, Pagination } from '@abiz/rc-jxc';

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

export default () => {
  return (
    <ConfigProvider>
      <>
        <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
        />
        <br />
        <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
          disabled
        />
      </>
    </ConfigProvider>
  );
};
```
