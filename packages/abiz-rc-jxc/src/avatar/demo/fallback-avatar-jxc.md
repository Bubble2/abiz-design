---
order: 99
---

```tsx
/**
 * title: 图片不存在时
 * desc: 图片不存在时，会回退到`src`。
 */

import React from 'react';
import { ConfigProvider, Avatar } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Avatar shape="circle" src="http://abc.com/not-exist.jpg">
          A
        </Avatar>
        <Avatar shape="circle" src="http://abc.com/not-exist.jpg">
          ABC
        </Avatar>
      </>
    </ConfigProvider>
  );
};
```
