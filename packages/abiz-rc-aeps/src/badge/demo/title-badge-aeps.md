---
order: 100
---

```tsx
/**
 * title: 自定义标题
 * desc: 设置鼠标放在状态点上时显示的文字。
 */

import React from 'react';
import { ConfigProvider, Badge } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <div>
        <Badge count={5} title="Custom hover text">
          <a href="#" className="head-example" />
        </Badge>
        <Badge count={-5} title="Negative">
          <a href="#" className="head-example" />
        </Badge>
      </div>
    </ConfigProvider>
  );
};
```
