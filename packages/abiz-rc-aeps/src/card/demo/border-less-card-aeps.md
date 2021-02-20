---
order: 1
---

```tsx
/**
 * title: 无边框
 * desc: 在灰色背景上使用无边框的卡片。
 */

import React from 'react';
import { ConfigProvider, Card } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <div className="site-card-border-less-wrapper">
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </ConfigProvider>
  );
};
```

```css
.site-card-border-less-wrapper {
  padding: 30px;
  background: #ececec;
}
```
