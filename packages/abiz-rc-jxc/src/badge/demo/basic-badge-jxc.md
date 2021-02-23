---
order: 0
---

```tsx
/**
 * title: 基本
 * desc: 简单的徽章展示，当`count`为`0`时，默认不显示，但是可以使用`showZero`修改为显示。
 */

import React from 'react';
import { ConfigProvider, Badge } from '@abiz/rc-jxc';
import { ClockCircleOutlined } from '@abiz/icons-jxc';

export default () => {
  return (
    <ConfigProvider>
      <div>
        <Badge count={5}>
          <a href="#" className="head-example" />
        </Badge>
        <Badge count={0} showZero>
          <a href="#" className="head-example" />
        </Badge>
        <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
          <a href="#" className="head-example" />
        </Badge>
      </div>
    </ConfigProvider>
  );
};
```
