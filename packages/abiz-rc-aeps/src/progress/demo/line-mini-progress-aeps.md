---
order: 2
---

```tsx
/**
 * title: 小型进度条
 * desc: 适合放在较狭窄的区域内。
 */

import React from 'react';
import { ConfigProvider, Progress } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <div style={{ width: 170 }}>
        <Progress percent={30} size="small" />
        <Progress percent={50} size="small" status="active" />
        <Progress percent={70} size="small" status="exception" />
        <Progress percent={100} size="small" />
      </div>
    </ConfigProvider>
  );
};
```
