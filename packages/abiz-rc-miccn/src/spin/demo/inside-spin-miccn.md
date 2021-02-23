---
order: 2
---

```tsx
/**
 * title: 容器
 * desc: 放入一个容器中。
 */

import React from 'react';
import { ConfigProvider, Spin } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <div className="example">
        <Spin />
      </div>
    </ConfigProvider>
  );
};
```

```css
.example {
  margin: 20px 0;
  margin-bottom: 20px;
  padding: 30px 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
```
