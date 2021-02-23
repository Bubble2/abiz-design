---
order: 9
---

```tsx
/**
 * title: 危险按钮
 * desc: 在4.0之后，危险成为一种按钮属性而不是按钮类型。
 */

import React from 'react';
import { ConfigProvider, Button } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Button type="primary" danger>
          Primary
        </Button>
        <Button danger>Default</Button>
        <Button type="dashed" danger>
          Dashed
        </Button>
        <Button type="text" danger>
          Text
        </Button>
        <Button type="link" danger>
          Link
        </Button>
      </>
    </ConfigProvider>
  );
};
```
