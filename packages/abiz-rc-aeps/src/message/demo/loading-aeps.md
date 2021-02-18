```tsx
/**
 * title: 加载中
 * desc: 进行全局 loading，异步自行移除。
 */

import React from 'react';
import { ConfigProvider, message, Button } from '@abiz/rc-aeps';

const success = () => {
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

export default () => {
  return (
    <ConfigProvider>
      <Button onClick={success}>Display a loading indicator</Button>
    </ConfigProvider>
  );
};
```
