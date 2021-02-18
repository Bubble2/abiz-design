```tsx
/**
 * title: Promise 接口
 * desc: 可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。
 */

import React from 'react';
import { ConfigProvider, message, Button } from '@abiz/rc-jxc';

const success = () => {
  message
    .loading('Action in progress..', 2.5)
    .then(() => message.success('Loading finished', 2.5))
    .then(() => message.info('Loading finished is finished', 2.5));
};

export default () => {
  return (
    <ConfigProvider>
      <Button onClick={success}>Display sequential messages</Button>
    </ConfigProvider>
  );
};
```
