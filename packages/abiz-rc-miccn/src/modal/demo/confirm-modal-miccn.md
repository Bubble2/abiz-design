---
order: 3
---

```tsx
/**
 * title: 确认对话框
 * desc: 使用`confirm()`可以快捷地弹出确认框。onCancel/onOk返回promise可以延迟关闭。
 */

import React from 'react';
import { ConfigProvider, Modal, Button, Space } from '@abiz/rc-miccn';
import { ExclamationCircleOutlined } from '@abiz/icons-miccn';

const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: 'Do you Want to delete these items?',
    icon: <ExclamationCircleOutlined />,
    content: 'Some descriptions',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function showPromiseConfirm() {
  confirm({
    title: 'Do you want to delete these items?',
    icon: <ExclamationCircleOutlined />,
    content:
      'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
}

function showDeleteConfirm() {
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleOutlined />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function showPropsConfirm() {
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleOutlined />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    okButtonProps: {
      disabled: true,
    },
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

export default () => {
  return (
    <ConfigProvider>
      <Space>
        <Button onClick={showConfirm}>Confirm</Button>
        <Button onClick={showPromiseConfirm}>With promise</Button>
        <Button onClick={showDeleteConfirm} type="dashed">
          Delete
        </Button>
        <Button onClick={showPropsConfirm} type="dashed">
          With extra props
        </Button>
      </Space>
    </ConfigProvider>
  );
};
```
