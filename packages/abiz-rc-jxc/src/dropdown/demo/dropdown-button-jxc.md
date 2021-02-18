```tsx
/**
 * title: 带下拉框的按钮
 * desc: 左边是按钮，右边是额外的相关功能菜单。可设置 `icon` 属性来修改右边的图标。
 */

import React from 'react';
import {
  ConfigProvider,
  Menu,
  Dropdown,
  Button,
  message,
  Space,
  Tooltip,
} from '@abiz/rc-jxc';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);

export default () => {
  return (
    <ConfigProvider>
      <Space wrap>
        <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
          Dropdown
        </Dropdown.Button>
        <Dropdown.Button
          overlay={menu}
          placement="bottomCenter"
          icon={<UserOutlined />}
        >
          Dropdown
        </Dropdown.Button>
        <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
          Dropdown
        </Dropdown.Button>
        <Dropdown.Button
          overlay={menu}
          buttonsRender={([leftButton, rightButton]) => [
            <Tooltip title="tooltip" key="leftButton">
              {leftButton}
            </Tooltip>,
            React.cloneElement(rightButton, { loading: true }),
          ]}
        >
          With Tooltip
        </Dropdown.Button>
        <Dropdown overlay={menu}>
          <Button>
            Button <DownOutlined />
          </Button>
        </Dropdown>
      </Space>
    </ConfigProvider>
  );
};
```
