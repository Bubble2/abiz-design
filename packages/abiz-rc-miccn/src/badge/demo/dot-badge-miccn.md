---
order: 3
---

```tsx
/**
 * title: 讨嫌的小红点
 * desc: 没有具体的数字。
 */

import React from 'react';
import { ConfigProvider, Badge } from '@abiz/rc-miccn';
import { NotificationOutlined } from '@abiz/icons-miccn';

export default () => {
  return (
    <ConfigProvider>
      <div>
        <Badge dot>
          <NotificationOutlined />
        </Badge>
        <Badge count={0} dot>
          <NotificationOutlined />
        </Badge>
        <Badge dot>
          <a href="#">Link something</a>
        </Badge>
      </div>
    </ConfigProvider>
  );
};
```
