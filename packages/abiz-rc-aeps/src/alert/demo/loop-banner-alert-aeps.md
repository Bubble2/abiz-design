---
order: 6.1
---

```tsx
/**
 * title: 轮播的公告
 * desc: 配合[react-text-loop](https://npmjs.com/package/react-text-loop)实现消息轮播通知栏。
 */

import React from 'react';
import { ConfigProvider, Alert } from '@abiz/rc-aeps';
import TextLoop from 'react-text-loop';

export default () => {
  return (
    <ConfigProvider>
      <Alert
        banner
        message={
          <TextLoop mask>
            <div>Notice message one</div>
            <div>Notice message two</div>
            <div>Notice message three</div>
            <div>Notice message four</div>
          </TextLoop>
        }
      />
    </ConfigProvider>
  );
};
```
