---
order: 99
---

```tsx
/**
 * title: 调整浏览器大小，观察 Affix 容器是否发生变化。跟随变化为正常。#17678
 * desc: DEBUG
 */

import React, { useState } from 'react';
import { ConfigProvider, Affix, Button } from '@abiz/rc-aeps';

const Demo: React.FC = () => {
  const [top, setTop] = useState(10);
  return (
    <div style={{ height: 10000 }}>
      <div>Top</div>
      <Affix offsetTop={top}>
        <div style={{ background: 'red' }}>
          <Button type="primary" onClick={() => setTop(top + 10)}>
            Affix top
          </Button>
        </div>
      </Affix>
      <div>Bottom</div>
    </div>
  );
};

export default () => {
  return (
    <ConfigProvider>
      <Demo />
    </ConfigProvider>
  );
};
```
