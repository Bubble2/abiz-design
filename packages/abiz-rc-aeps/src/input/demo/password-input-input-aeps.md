---
order: 10
---

```tsx
/**
 * title: 密码框
 * desc: 密码框。
 */

import React from 'react';
import { ConfigProvider, Input, Space } from '@abiz/rc-aeps';
import { EyeInvisibleOutlined, EyeTwoTone } from '@abiz/icons-aeps';

export default () => {
  return (
    <ConfigProvider>
      <Space direction="vertical">
        <Input.Password placeholder="input password" />
        <Input.Password
          placeholder="input password"
          iconRender={visible =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Space>
    </ConfigProvider>
  );
};
```
