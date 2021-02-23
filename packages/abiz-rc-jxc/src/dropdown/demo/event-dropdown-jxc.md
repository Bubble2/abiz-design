---
order: 4
---

```tsx
/**
 * title: 触发事件
 * desc: 点击菜单项后会触发事件，用户可以通过相应的菜单项key进行不同的操作。
 */

import React from 'react';
import { ConfigProvider, Menu, Dropdown, message } from '@abiz/rc-jxc';
import { DownOutlined } from '@abiz/icons-jxc';

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

export default () => {
  return (
    <ConfigProvider>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Hover me, Click menu item <DownOutlined />
        </a>
      </Dropdown>
    </ConfigProvider>
  );
};
```
