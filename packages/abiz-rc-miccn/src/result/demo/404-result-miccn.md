---
order: 5
---

```tsx
/**
 * title: 404
 * desc: 此页面未找到。
 */

import React from 'react';
import { ConfigProvider, Result, Button } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </ConfigProvider>
  );
};
```
