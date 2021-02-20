---
order: 3
---

```tsx
/**
 * title: 只读
 * desc: 只读，无法进行鼠标交互。
 */

import React from 'react';
import { ConfigProvider, Rate } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Rate disabled defaultValue={2} />
    </ConfigProvider>
  );
};
```
