---
order: 2
---

```tsx
/**
 * title: 带有图标的通知提醒框
 * desc: 通知提醒框左侧有图标。
 */

import React from 'react';
import { ConfigProvider, Button, notification, Space } from '@abiz/rc-miccn';

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

export default () => {
  return (
    <ConfigProvider>
      <Space>
        <Button onClick={() => openNotificationWithIcon('success')}>
          Success
        </Button>
        <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
        <Button onClick={() => openNotificationWithIcon('warning')}>
          Warning
        </Button>
        <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
      </Space>
    </ConfigProvider>
  );
};
```
