---
order: 0
---

```tsx
/**
 * title: 基本
 * desc: 最简单的用法。
 */

import React from 'react';
import { ConfigProvider, BackTop } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <>
        <BackTop />
        Scroll down to see the bottom-right
        <strong className="site-back-top-basic"> gray </strong>
        button.
      </>
    </ConfigProvider>
  );
};
```

```css
.site-back-top-basic {
  color: rgba(64, 64, 64, 0.6);
}
```
