---
order: 0
---

```tsx
/**
 * title: 基本
 * desc: 头像有三种尺寸，两种形状可选。
 */

import React from 'react';
import { ConfigProvider, Avatar } from '@abiz/rc-jxc';
import { UserOutlined } from '@abiz/icons-jxc';

export default () => {
  return (
    <ConfigProvider>
      <>
        <div>
          <Avatar size={64} icon={<UserOutlined />} />
          <Avatar size="large" icon={<UserOutlined />} />
          <Avatar icon={<UserOutlined />} />
          <Avatar size="small" icon={<UserOutlined />} />
        </div>
        <div>
          <Avatar shape="square" size={64} icon={<UserOutlined />} />
          <Avatar shape="square" size="large" icon={<UserOutlined />} />
          <Avatar shape="square" icon={<UserOutlined />} />
          <Avatar shape="square" size="small" icon={<UserOutlined />} />
        </div>
      </>
    </ConfigProvider>
  );
};
```
