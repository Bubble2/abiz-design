```tsx
/**
 * title: 带徽标的头像
 * desc: 通常用于消息提示。
 */

import React from 'react';
import { ConfigProvider, Avatar, Badge } from '@abiz/rc-miccn';
import { UserOutlined } from '@ant-design/icons';

export default () => {
  return (
    <ConfigProvider>
      <>
        <span className="avatar-item">
          <Badge count={1}>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Badge>
        </span>
        <span>
          <Badge dot>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Badge>
        </span>
      </>
    </ConfigProvider>
  );
};
```

```css
/* tile uploaded pictures */
.avatar-item {
  margin-right: 24px;
}

[class*='-col-rtl'] .avatar-item {
  margin-right: 0;
  margin-left: 24px;
}
```
