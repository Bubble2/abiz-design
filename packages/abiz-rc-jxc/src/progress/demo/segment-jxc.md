```tsx
/**
 * title: 分段进度条
 * desc: 标准的进度条。`type="circle|dashboard"` 时不支持分段颜色。
 */

import React from 'react';
import { ConfigProvider, Tooltip, Progress } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Tooltip title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} success={{ percent: 30 }} />
        </Tooltip>

        <Tooltip title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} success={{ percent: 30 }} type="circle" />
        </Tooltip>

        <Tooltip title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} success={{ percent: 30 }} type="dashboard" />
        </Tooltip>
      </>
    </ConfigProvider>
  );
};
```
