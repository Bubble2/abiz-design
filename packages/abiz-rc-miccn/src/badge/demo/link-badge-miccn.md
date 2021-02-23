---
order: 3
---

```tsx
/**
 * title: 可点击
 * desc: 用a标签进行包裹即可。
 */

import React from 'react';
import { ConfigProvider, Badge } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <a href="#">
        <Badge count={5}>
          <span className="head-example" />
        </Badge>
      </a>
    </ConfigProvider>
  );
};
```
