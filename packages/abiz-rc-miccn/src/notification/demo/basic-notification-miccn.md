---
order: 0
---

```tsx
/**
 * title: 基本
 * desc: 最简单的用法，4.5秒后自动关闭。
 */

import React from 'react';
import { ConfigProvider, Button, notification } from '@abiz/rc-miccn';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
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
