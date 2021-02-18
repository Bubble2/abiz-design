```tsx
/**
 * title: 前缀和后缀
 * desc: 在输入框上添加前缀或后缀图标。
 */

import React from 'react';
import { ConfigProvider, Input, Tooltip } from '@abiz/rc-aeps';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Input
          placeholder="Enter your username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
        <br />
        <br />
        <Input prefix="￥" suffix="RMB" />
        <br />
        <br />
        <Input prefix="￥" suffix="RMB" disabled />
      </>
    </ConfigProvider>
  );
};
```
