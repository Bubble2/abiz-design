---
order: 9999
---

```tsx
/**
 * title: 样式自定义
 * desc: 测试一些 `style` 修改样式的行为。
 */

import React from 'react';
import { ConfigProvider, Divider } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Divider style={{ borderWidth: 2, borderColor: '#7cb305' }} />
        <Divider style={{ borderColor: '#7cb305' }} dashed />
        <Divider style={{ borderColor: '#7cb305' }} dashed>
          Text
        </Divider>
        <Divider
          type="vertical"
          style={{ height: 60, borderColor: '#7cb305' }}
        />
        <Divider
          type="vertical"
          style={{ height: 60, borderColor: '#7cb305' }}
          dashed
        />
      </>
    </ConfigProvider>
  );
};
```
