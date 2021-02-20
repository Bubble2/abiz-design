---
order: 0
---

```tsx
/**
 * title: 基本用法
 * desc: 单击图像可以放大显示。
 */

import React from 'react';
import { ConfigProvider, Image } from '@abiz/rc-miccn';

function ImageDemo() {
  return (
    <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  );
}

export default () => {
  return (
    <ConfigProvider>
      <ImageDemo />
    </ConfigProvider>
  );
};
```
