---
order: 10
---

```tsx
/**
 * title: Block 按钮
 * desc: <span></span>`block` 属性将使按钮适合其父宽度。
 */

import React from 'react';
import { ConfigProvider, Button } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Button type="primary" block>
          Primary
        </Button>
        <Button block>Default</Button>
        <Button type="dashed" block>
          Dashed
        </Button>
        <Button type="link" block>
          Link
        </Button>
      </>
    </ConfigProvider>
  );
};
```
