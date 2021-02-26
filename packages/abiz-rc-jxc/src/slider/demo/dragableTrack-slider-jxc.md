---
order: 9
---

```tsx
/**
 * title: 范围可拖拽
 * desc: 可以设置`range.draggableTrack`，使得范围刻度整体可拖拽。
 */

import React from 'react';
import { ConfigProvider, Slider } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
    </ConfigProvider>
  );
};
```
