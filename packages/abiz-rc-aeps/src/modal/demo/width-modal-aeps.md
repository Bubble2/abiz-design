---
order: 13
---

```tsx
/**
 * title: 自定义模态的宽度
 * desc: 使用`width`来设置模态对话框的宽度。
 */

import React, { useState } from 'react';
import { ConfigProvider, Modal, Button } from '@abiz/rc-aeps';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
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
