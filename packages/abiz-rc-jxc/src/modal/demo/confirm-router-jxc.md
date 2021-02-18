```tsx
/**
 * title: 销毁确认对话框
 * desc: 使用 `Modal.destroyAll()` 可以销毁弹出的确认窗。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题。
 */

import React from 'react';
import { ConfigProvider, Modal, Button } from '@abiz/rc-jxc';
import { ExclamationCircleOutlined } from '@ant-design/icons';

function destroyAll() {
  Modal.destroyAll();
}

const { confirm } = Modal;

function showConfirm() {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        icon: <ExclamationCircleOutlined />,
        content: <Button onClick={destroyAll}>Click to destroy all</Button>,
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }, i * 500);
  }
}

export default () => {
  return (
    <ConfigProvider>
      <Button onClick={showConfirm}>Confirm</Button>
    </ConfigProvider>
  );
};
```
