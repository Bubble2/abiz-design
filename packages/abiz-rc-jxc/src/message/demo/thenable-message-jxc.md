---
order: 5
---

```tsx
/**
 * title: Promise 接口
 * desc: 可以通过then接口在关闭后运行callback。以上用例将在每个message将要结束时通过then显示新的message。
 */

import React from 'react';
import { ConfigProvider, message, Button } from '@abiz/rc-jxc';

const success = () => {
  message
    .loading('Action in progress..', 2.5)
    .then(() => message.success('Loading finished', 2.5))
    .then(() => message.info('Loading finished is finished', 2.5));
};

export default () => {
  return (
    <ConfigProvider>
      <Button onClick={success}>Display sequential messages</Button>
    </ConfigProvider>
  );
};
```
