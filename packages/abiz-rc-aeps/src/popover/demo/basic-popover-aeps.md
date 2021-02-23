---
order: 0
---

```tsx
/**
 * title: 基本
 * desc: 最简单的用法，浮层的大小由内容区域决定。
 */

import React from 'react';
import { ConfigProvider, Popover, Button } from '@abiz/rc-aeps';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default () => {
  return (
    <ConfigProvider>
      <Popover content={content} title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>
    </ConfigProvider>
  );
};
```
