```tsx
/**
 * title: 进度圈
 * desc: 圈形的进度。
 */

import React from 'react';
import { ConfigProvider, Progress } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Progress type="circle" percent={75} />
        <Progress type="circle" percent={70} status="exception" />
        <Progress type="circle" percent={100} />
      </>
    </ConfigProvider>
  );
};
```
