```tsx
/**
 * title: 全部展示
 * desc: 展示所有配置选项。
 */

import React from 'react';
import { ConfigProvider, Pagination } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Pagination
          total={85}
          showSizeChanger
          showQuickJumper
          showTotal={total => `Total ${total} items`}
        />
      </>
    </ConfigProvider>
  );
};
```
