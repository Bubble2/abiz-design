---
order: 4
---

```tsx
/**
 * title: 自定义描述文案
 * desc: 自定义描述文案。
 */

import React from 'react';
import { ConfigProvider, Spin, Alert } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    </ConfigProvider>
  );
};
```
