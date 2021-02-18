```tsx
/**
 * title: 步骤进度条
 * desc: 带步骤的进度条。
 */

import React from 'react';
import { ConfigProvider, Progress } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Progress percent={50} steps={3} />
        <br />
        <Progress percent={30} steps={5} />
        <br />
        <Progress percent={100} steps={5} size="small" strokeColor="#52c41a" />
      </>
    </ConfigProvider>
  );
};
```
