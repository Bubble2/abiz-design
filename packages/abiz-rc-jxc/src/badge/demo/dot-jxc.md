```tsx
/**
 * title: 讨嫌的小红点
 * desc: 没有具体的数字。
 */

import React from 'react';
import { ConfigProvider, Badge } from '@abiz/rc-jxc';
import { NotificationOutlined } from '@ant-design/icons';

export default () => {
  return (
    <ConfigProvider>
      <div>
        <Badge dot>
          <NotificationOutlined />
        </Badge>
        <Badge count={0} dot>
          <NotificationOutlined />
        </Badge>
        <Badge dot>
          <a href="#">Link something</a>
        </Badge>
      </div>
    </ConfigProvider>
  );
};
```
