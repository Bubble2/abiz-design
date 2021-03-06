---
order: 99
---

```tsx
/**
 * title: 无遮罩
 * desc: 通过`mask={false}`去掉遮罩。
 */

import React, { useState } from 'react';
import { ConfigProvider, Drawer, Button } from '@abiz/rc-aeps';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Drawer without mask"
        placement="right"
        mask={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default () => {
  return (
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
};
```
