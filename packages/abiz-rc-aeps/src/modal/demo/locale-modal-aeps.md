---
order: 6
---

```tsx
/**
 * title: 国际化
 * desc: 设置 `okText` 与 `cancelText` 以自定义按钮文字。
 */

import React from 'react';
import { ConfigProvider, Modal, Button, Space } from '@abiz/rc-aeps';
import { ExclamationCircleOutlined } from '@abiz/icons-aeps';

class LocalizedModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Modal
        </Button>
        <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </>
    );
  }
}

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    icon: <ExclamationCircleOutlined />,
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
  });
}

export default () => {
  return (
    <ConfigProvider>
      <Space>
        <LocalizedModal />
        <Button onClick={confirm}>Confirm</Button>
      </Space>
    </ConfigProvider>
  );
};
```
