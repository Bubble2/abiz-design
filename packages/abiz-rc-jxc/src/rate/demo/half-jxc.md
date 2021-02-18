```tsx
/**
 * title: 半星
 * desc: 支持选中半星。
 */

import React from 'react';
import { ConfigProvider, Rate } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Rate allowHalf defaultValue={2.5} />
    </ConfigProvider>
  );
};
```
