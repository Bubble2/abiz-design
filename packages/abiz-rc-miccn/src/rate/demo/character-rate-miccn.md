---
order: 5
---

```tsx
/**
 * title: 其他字符
 * desc: 可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。
 */

import React from 'react';
import { ConfigProvider, Rate } from '@abiz/rc-miccn';
import { HeartOutlined } from '@abiz/icons-miccn';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Rate character={<HeartOutlined />} allowHalf />
        <br />
        <Rate character="A" allowHalf style={{ fontSize: 36 }} />
        <br />
        <Rate character="好" allowHalf />
      </>
    </ConfigProvider>
  );
};
```
