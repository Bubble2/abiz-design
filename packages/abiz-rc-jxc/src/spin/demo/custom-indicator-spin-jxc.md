---
order: 6
---

```tsx
/**
 * title: 自定义指示符
 * desc: 使用自定义指示符。
 */

import React from 'react';
import { ConfigProvider, Spin } from '@abiz/rc-jxc';
import { LoadingOutlined } from '@abiz/icons-jxc';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default () => {
  return (
    <ConfigProvider>
      <Spin indicator={antIcon} />
    </ConfigProvider>
  );
};
```
