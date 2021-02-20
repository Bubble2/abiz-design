---
order: 3
---

```tsx
/**
 * title: 自定义尺寸
 * desc: 自定义间距大小。
 */

import React, { useState } from 'react';
import { ConfigProvider, Space, Slider, Button } from '@abiz/rc-jxc';

function SpaceCustomizeSize() {
  const [size, setSize] = useState(8);

  return (
    <>
      <Slider value={size} onChange={value => setSize(value)} />
      <br />
      <br />
      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </>
  );
}

export default () => {
  return (
    <ConfigProvider>
      <SpaceCustomizeSize />
    </ConfigProvider>
  );
};
```
