---
order: 99
---

```tsx
/**
 * title: Badge style
 * desc: 测试Badge的样式。
 */

import React from 'react';
import { ConfigProvider, Radio, Badge } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <Radio.Group buttonStyle="solid">
        <Badge count={1}>
          <Radio.Button value={1}>Click Me</Radio.Button>
        </Badge>
        <Badge count={2}>
          <Radio.Button value={2}>Not Me</Radio.Button>
        </Badge>
      </Radio.Group>
    </ConfigProvider>
  );
};
```
