---
order: 2
---

```tsx
/**
 * title: 滚动容器
 * desc: 用`target`设置`Affix`需要监听其滚动事件的元素，默认为`window`。
 */

import React, { useState } from 'react';
import { ConfigProvider, Affix, Button } from '@abiz/rc-aeps';

const Demo: React.FC = () => {
  const [container, setContainer] = useState(null);
  return (
    <div className="scrollable-container" ref={setContainer}>
      <div className="background">
        <Affix target={() => container}>
          <Button type="primary">Fixed at the top of container</Button>
        </Affix>
      </div>
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
