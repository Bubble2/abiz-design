```tsx
/**
 * title: 四种样式
 * desc: 共有四种样式 `success`、`info`、`warning`、`error`。
 */

import React from 'react';
import { ConfigProvider, Alert } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Alert message="Success Text" type="success" />
        <Alert message="Info Text" type="info" />
        <Alert message="Warning Text" type="warning" />
        <Alert message="Error Text" type="error" />
      </>
    </ConfigProvider>
  );
};
```
