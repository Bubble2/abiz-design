---
order: 4
---

```tsx
/**
 * title: 403
 * desc: 你没有此页面的访问权限。
 */

import React from 'react';
import { ConfigProvider, Result, Button } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
      />
    </ConfigProvider>
  );
};
```
