---
order: 7
---

```tsx
/**
 * title: 更新消息内容
 * desc: 可以通过唯一的key来更新内容。
 */

import React from 'react';
import { ConfigProvider, Button, notification } from '@abiz/rc-aeps';

const key = 'updatable';

const openNotification = () => {
  notification.open({
    key,
    message: 'Notification Title',
    description: 'description.',
  });
  setTimeout(() => {
    notification.open({
      key,
      message: 'New Title',
      description: 'New description.',
    });
  }, 1000);
};

export default () => {
  return (
    <ConfigProvider>
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </ConfigProvider>
  );
};
```
