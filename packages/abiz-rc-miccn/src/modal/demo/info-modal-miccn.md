---
order: 5
---

```tsx
/**
 * title: 信息提示
 * desc: 各种类型的信息提示，只提供一个按钮用于关闭。
 */

import React from 'react';
import { ConfigProvider, Modal, Button, Space } from '@abiz/rc-miccn';

function info() {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
}

function success() {
  Modal.success({
    content: 'some messages...some messages...',
  });
}

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}

export default () => {
  return (
    <ConfigProvider>
      <Space>
        <Button onClick={info}>Info</Button>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </Space>
    </ConfigProvider>
  );
};
```
