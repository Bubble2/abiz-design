---
order: 1
---

```tsx
/**
 * title: 选择图片
 * desc: 可以通过设置 `image` 为 `Empty.PRESENTED_IMAGE_SIMPLE` 选择另一种风格的图片。
 */

import React from 'react';
import { ConfigProvider, Empty } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </ConfigProvider>
  );
};
```
