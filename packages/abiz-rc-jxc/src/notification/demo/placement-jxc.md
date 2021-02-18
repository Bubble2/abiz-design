```tsx
/**
 * title: 位置
 * desc: 通知从右上角、右下角、左下角、左上角弹出。
 */

import React from 'react';
import {
  ConfigProvider,
  Button,
  notification,
  Divider,
  Space,
} from '@abiz/rc-jxc';
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from '@ant-design/icons';

const openNotification = placement => {
  notification.info({
    message: `Notification ${placement}`,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    placement,
  });
};

export default () => {
  return (
    <ConfigProvider>
      <div>
        <Space>
          <Button type="primary" onClick={() => openNotification('topLeft')}>
            <RadiusUpleftOutlined />
            topLeft
          </Button>
          <Button type="primary" onClick={() => openNotification('topRight')}>
            <RadiusUprightOutlined />
            topRight
          </Button>
        </Space>
        <Divider />
        <Space>
          <Button type="primary" onClick={() => openNotification('bottomLeft')}>
            <RadiusBottomleftOutlined />
            bottomLeft
          </Button>
          <Button
            type="primary"
            onClick={() => openNotification('bottomRight')}
          >
            <RadiusBottomrightOutlined />
            bottomRight
          </Button>
        </Space>
      </div>
    </ConfigProvider>
  );
};
```
