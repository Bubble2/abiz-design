```tsx
/**
 * title: 总数
 * desc: 通过设置 `showTotal` 展示总共有多少数据。
 */

import React from 'react';
import { ConfigProvider, Pagination } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Pagination
          total={85}
          showTotal={total => `Total ${total} items`}
          defaultPageSize={20}
          defaultCurrent={1}
        />
        <br />
        <Pagination
          total={85}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} items`
          }
          defaultPageSize={20}
          defaultCurrent={1}
        />
      </>
    </ConfigProvider>
  );
};
```
