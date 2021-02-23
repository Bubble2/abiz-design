---
order: 4
---

```tsx
/**
 * title: 清除
 * desc: 支持允许或者禁用清除。
 */

import React from 'react';
import { ConfigProvider, Rate } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Rate defaultValue={3} />
        <span className="ant-rate-text">allowClear: true</span>
        <br />
        <Rate allowClear={false} defaultValue={3} />
        <span className="ant-rate-text">allowClear: false</span>
      </>
    </ConfigProvider>
  );
};
```
