---
order: 2
---

```tsx
/**
 * title: 封顶数字
 * desc: 超过`overflowCount`的会显示为`${overflowCount}+`，默认的`overflowCount`为`99`。
 */

import React from 'react';
import { ConfigProvider, Badge } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <div>
        <Badge count={99}>
          <a href="#" className="head-example" />
        </Badge>
        <Badge count={100}>
          <a href="#" className="head-example" />
        </Badge>
        <Badge count={99} overflowCount={10}>
          <a href="#" className="head-example" />
        </Badge>
        <Badge count={1000} overflowCount={999}>
          <a href="#" className="head-example" />
        </Badge>
      </div>
    </ConfigProvider>
  );
};
```
