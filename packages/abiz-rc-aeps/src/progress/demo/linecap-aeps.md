```tsx
/**
 * title: 圆角/方角边缘
 * desc: 通过设定 `strokeLinecap="square|round"` 可以调整进度条边缘的形状。
 */

import React from 'react';
import { ConfigProvider, Progress } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Progress strokeLinecap="square" percent={75} />
        <Progress strokeLinecap="square" type="circle" percent={75} />
        <Progress strokeLinecap="square" type="dashboard" percent={75} />
      </>
    </ConfigProvider>
  );
};
```
