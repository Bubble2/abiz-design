---
order: 6
---

```tsx
/**
 * title: 自定义样式
 * desc: 使用`style`和`className`来定义样式。
 */

import React from 'react';
import { ConfigProvider, message, Button } from '@abiz/rc-miccn';

const success = () => {
  message.success({
    content: 'This is a prompt message with custom className and style',
    className: 'custom-class',
    style: {
      marginTop: '20vh',
    },
  });
};

export default () => {
  return (
    <ConfigProvider>
      <Button onClick={success}>Customized style</Button>
    </ConfigProvider>
  );
};
```
