---
order: 5
---

```tsx
/**
 * title: 响应式尺寸
 * desc: 头像大小可以根据屏幕大小自动调整。
 */

import React from 'react';
import { ConfigProvider, Avatar } from '@abiz/rc-aeps';
import { AntDesignOutlined } from '@abiz/icons-aeps';

export default () => {
  return (
    <ConfigProvider>
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        icon={<AntDesignOutlined />}
      />
    </ConfigProvider>
  );
};
```
