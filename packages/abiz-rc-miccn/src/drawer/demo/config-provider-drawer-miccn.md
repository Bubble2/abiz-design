---
order: 99
---

```tsx
/**
 * title: ConfigProvider
 * desc: 支持 ConfigProvider 配置。
 */

import React, { useState, useRef } from 'react';
import { Drawer, ConfigProvider, Button } from '@abiz/rc-miccn';

const App: React.FC = () => {
  const domRef = useRef();
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <ConfigProvider
      getPopupContainer={() => {
        return domRef.current;
      }}
    >
      <div ref={domRef} className="site-drawer-render-in-current-wrapper">
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
        <Drawer
          style={{ position: 'absolute' }}
          title="ConfigProvider"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </ConfigProvider>
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
