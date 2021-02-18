```tsx
/**
 * title: 自定义样式
 * desc: 使用 style 和 className 来定义样式。
 */

import React from 'react';
import { ConfigProvider, Button, notification } from '@abiz/rc-miccn';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    className: 'custom-class',
    style: {
      width: 600,
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
