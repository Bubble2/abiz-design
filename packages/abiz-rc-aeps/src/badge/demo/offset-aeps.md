```tsx
/**
 * title: 自定义位置偏移
 * desc: 设置状态点的位置偏移，格式为 `[left, top]`，表示状态点距默认位置左侧、上方的偏移量。
 */

import React from 'react';
import { ConfigProvider, Badge } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Badge count={5} offset={[10, 10]}>
          <a href="#" className="head-example" />
        </Badge>
      </>
    </ConfigProvider>
  );
};
```
