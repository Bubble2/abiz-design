---
order: 8
---

```tsx
/**
 * title: 自定义 icon
 * desc: 自定义icon。
 */

import React from 'react';
import { ConfigProvider, Result, Button } from '@abiz/rc-miccn';
import { SmileOutlined } from '@abiz/icons-miccn';

export default () => {
  return (
    <ConfigProvider>
      <Result
        icon={<SmileOutlined />}
        title="Great, we have done all the operations!"
        extra={<Button type="primary">Next</Button>}
      />
    </ConfigProvider>
  );
};
```
