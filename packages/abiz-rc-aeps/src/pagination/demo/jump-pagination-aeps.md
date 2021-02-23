---
order: 3
---

```tsx
/**
 * title: 跳转
 * desc: 快速跳转到某一页。
 */

import React from 'react';
import { ConfigProvider, Pagination } from '@abiz/rc-aeps';

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

export default () => {
  return (
    <ConfigProvider>
      <>
        <Pagination
          showQuickJumper
          defaultCurrent={2}
          total={500}
          onChange={onChange}
        />
        <br />
        <Pagination
          showQuickJumper
          defaultCurrent={2}
          total={500}
          onChange={onChange}
          disabled
        />
      </>
    </ConfigProvider>
  );
};
```
