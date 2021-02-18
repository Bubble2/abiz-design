```tsx
/**
 * title: 菜单隐藏方式
 * desc: 默认是点击关闭菜单，可以关闭此功能。
 */

import React from 'react';
import { ConfigProvider, Menu, Dropdown } from '@abiz/rc-aeps';
import { DownOutlined } from '@ant-design/icons';

class OverlayVisible extends React.Component {
  state = {
    visible: false,
  };

  handleMenuClick = e => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
        <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
        <Menu.Item key="3">Clicking me will close the menu.</Menu.Item>
      </Menu>
    );
    return (
      <Dropdown
        overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Hover me <DownOutlined />
        </a>
      </Dropdown>
    );
  }
}

export default () => {
  return (
    <ConfigProvider>
      <OverlayVisible />
    </ConfigProvider>
  );
};
```
