```tsx
/**
 * title: 垂直分割线
 * desc: 使用 `type="vertical"` 设置为行内的垂直分割线。
 */

import React from 'react';
import { ConfigProvider, Divider } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <>
        Text
        <Divider type="vertical" />
        <a href="#">Link</a>
        <Divider type="vertical" />
        <a href="#">Link</a>
      </>
    </ConfigProvider>
  );
};
```
