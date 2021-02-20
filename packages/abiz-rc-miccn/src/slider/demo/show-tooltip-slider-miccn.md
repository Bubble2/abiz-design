---
order: 7
---

```tsx
/**
 * title: 控制 ToolTip 的显示
 * desc: 当 `tooltipVisible` 为 `true` 时，将始终显示 ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。
 */

import React from 'react';
import { ConfigProvider, Slider } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <Slider defaultValue={30} tooltipVisible />
    </ConfigProvider>
  );
};
```
