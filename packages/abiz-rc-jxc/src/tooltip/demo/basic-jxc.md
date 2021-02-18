```tsx
/**
 * title: 基本
 * desc: 最简单的用法。
 */

import React from 'react';
import { ConfigProvider, Tooltip } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Tooltip title="prompt text">
        <span>Tooltip will show on mouse enter.</span>
      </Tooltip>
    </ConfigProvider>
  );
};
```
