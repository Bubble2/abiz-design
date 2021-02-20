---
order: 5
---

```tsx
/**
 * title: 异步关闭
 * desc: 点击确定后异步关闭气泡确认框，例如提交表单。
 */

import React from 'react';
import { ConfigProvider, Popconfirm, Button } from '@abiz/rc-aeps';

const App = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <Popconfirm
        title="Title"
        visible={visible}
        onConfirm={handleOk}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handleCancel}
      >
        <Button type="primary" onClick={showPopconfirm}>
          Open Popconfirm with async logic
        </Button>
      </Popconfirm>
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
