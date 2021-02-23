---
order: 0
---

```tsx
/**
 * title: 进度条
 * desc: 标准的进度条。
 */

import React from 'react';
import { ConfigProvider, Progress } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Progress percent={30} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
      </>
    </ConfigProvider>
  );
};
```
