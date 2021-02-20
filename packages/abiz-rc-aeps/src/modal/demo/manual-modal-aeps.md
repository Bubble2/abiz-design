---
order: 7
---

```tsx
/**
 * title: 手动更新和移除
 * desc: 手动更新和关闭 `Modal.method` 方式创建的对话框。
 */

import React from 'react';
import { ConfigProvider, Modal, Button } from '@abiz/rc-aeps';

function countDown() {
  let secondsToGo = 5;
  const modal = Modal.success({
    title: 'This is a notification message',
    content: `This modal will be destroyed after ${secondsToGo} second.`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}

export default () => {
  return (
    <ConfigProvider>
      <Button onClick={countDown}>Open modal to close in 5s</Button>
    </ConfigProvider>
  );
};
```
