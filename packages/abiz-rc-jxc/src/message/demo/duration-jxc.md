```tsx
/**
 * title: 修改延时
 * desc: 自定义时长 `10s`，默认时长为 `3s`。
 */

import React from 'react';
import { ConfigProvider, message, Button } from '@abiz/rc-jxc';

const success = () => {
  message.success(
    'This is a prompt message for success, and it will disappear in 10 seconds',
    10,
  );
};

export default () => {
  return (
    <ConfigProvider>
      <Button onClick={success}>Customized display duration</Button>
    </ConfigProvider>
  );
};
```
