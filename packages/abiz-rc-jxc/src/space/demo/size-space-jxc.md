---
order: 2
---

```tsx
/**
 * title: 间距大小
 * desc: 间距预设大、中、小三种大小。通过设置`size`为`large``middle`分别把间距设为大、中间距。若不设置`size`，则间距为小。
 */

import React, { useState } from 'react';
import { ConfigProvider, Space, Radio, Button } from '@abiz/rc-jxc';

function SpaceSize() {
  const [size, setSize] = useState('small');

  return (
    <>
      <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
        <Radio value="small">Small</Radio>
        <Radio value="middle">Middle</Radio>
        <Radio value="large">Large</Radio>
      </Radio.Group>
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
      <SpaceSize />
    </ConfigProvider>
  );
};
```
