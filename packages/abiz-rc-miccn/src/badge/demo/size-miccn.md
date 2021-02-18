```tsx
/**
 * title: 大小
 * desc: 可以设置有数字徽标的大小。
 */

import React from 'react';
import { ConfigProvider, Badge } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Badge size="default" count={5}>
          <a href="#" className="head-example" />
        </Badge>
        <Badge size="small" count={5}>
          <a href="#" className="head-example" />
        </Badge>
      </>
    </ConfigProvider>
  );
};
```
