---
order: 4
---

```tsx
/**
 * title: 自定义图标
 * desc: 图标可以被自定义。
 */

import React from 'react';
import { ConfigProvider, Button, notification } from '@abiz/rc-jxc';
import { SmileOutlined } from '@abiz/icons-jxc';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
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
