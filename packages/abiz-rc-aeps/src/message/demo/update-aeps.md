```tsx
/**
 * title: 更新消息内容
 * desc: 可以通过唯一的 `key` 来更新内容。
 */

import React from 'react';
import { ConfigProvider, Button, message } from '@abiz/rc-aeps';

const key = 'updatable';

const openMessage = () => {
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content: 'Loaded!', key, duration: 2 });
  }, 1000);
};

export default () => {
  return (
    <ConfigProvider>
      <Button type="primary" onClick={openMessage}>
        Open the message box
      </Button>
    </ConfigProvider>
  );
};
```
