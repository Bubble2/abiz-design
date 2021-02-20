---
order: 1
---

```tsx
/**
 * title: Info
 * desc: 展示处理结果。
 */

import React from 'react';
import { ConfigProvider, Result, Button } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Result
        title="Your operation has been executed"
        extra={
          <Button type="primary" key="console">
            Go Console
          </Button>
        }
      />
    </ConfigProvider>
  );
};
```
