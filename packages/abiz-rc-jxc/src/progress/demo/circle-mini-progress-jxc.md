---
order: 3
---

```tsx
/**
 * title: 小型进度圈
 * desc: 小一号的圈形进度。
 */

import React from 'react';
import { ConfigProvider, Progress } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Progress type="circle" percent={30} width={80} />
        <Progress type="circle" percent={70} width={80} status="exception" />
        <Progress type="circle" percent={100} width={80} />
      </>
    </ConfigProvider>
  );
};
```
