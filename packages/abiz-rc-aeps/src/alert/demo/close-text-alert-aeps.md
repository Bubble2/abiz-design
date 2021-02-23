---
order: 5
---

```tsx
/**
 * title: 自定义关闭
 * desc: 可以自定义关闭，自定义的文字会替换原先的关闭`Icon`。
 */

import React from 'react';
import { ConfigProvider, Alert } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <Alert message="Info Text" type="info" closeText="Close Now" />
    </ConfigProvider>
  );
};
```
