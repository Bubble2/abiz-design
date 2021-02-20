---
order: 4
---

```tsx
/**
 * title: 箭头指向
 * desc: 设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。
 */

import React from 'react';
import { ConfigProvider, Popover, Button } from '@abiz/rc-jxc';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default () => {
  return (
    <ConfigProvider>
      <div>
        <Popover placement="topLeft" title={text} content={content}>
          <Button>Align edge / 边缘对齐</Button>
        </Popover>
        <Popover
          placement="topLeft"
          title={text}
          content={content}
          arrowPointAtCenter
        >
          <Button>Arrow points to center / 箭头指向中心</Button>
        </Popover>
      </div>
    </ConfigProvider>
  );
};
```
