---
order: 6
---

```tsx
/**
 * title: 500
 * desc: 服务器发生了错误。
 */

import React from 'react';
import { ConfigProvider, Result, Button } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<Button type="primary">Back Home</Button>}
      />
    </ConfigProvider>
  );
};
```
