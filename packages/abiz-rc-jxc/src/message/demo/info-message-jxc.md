---
order: 0
---

```tsx
/**
 * title: 普通提示
 * desc: 信息提醒反馈。
 */

import React from 'react';
import { ConfigProvider, message, Button } from '@abiz/rc-jxc';

const info = () => {
  message.info('This is a normal message');
};

export default () => {
  return (
    <ConfigProvider>
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </ConfigProvider>
  );
};
```
