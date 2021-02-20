---
order: 2
---

```tsx
/**
 * title: Warning
 * desc: 警告类型的结果。
 */

import React from 'react';
import { ConfigProvider, Result, Button } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <Result
        status="warning"
        title="There are some problems with your operation."
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
