```tsx
/**
 * title: 无描述
 * desc: 无描述展示。
 */

import React from 'react';
import { ConfigProvider, Empty } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Empty description={false} />
    </ConfigProvider>
  );
};
```
