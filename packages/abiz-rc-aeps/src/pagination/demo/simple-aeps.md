```tsx
/**
 * title: 简洁
 * desc: 简单的翻页。
 */

import React from 'react';
import { ConfigProvider, Pagination } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Pagination simple defaultCurrent={2} total={50} />
        <br />
        <Pagination disabled simple defaultCurrent={2} total={50} />
      </>
    </ConfigProvider>
  );
};
```
