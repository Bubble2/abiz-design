---
order: 6
---

```tsx
/**
 * title: 多级菜单
 * desc: 传入的菜单里有多个层级。
 */

import React from 'react';
import { ConfigProvider, Menu, Dropdown } from '@abiz/rc-aeps';
import { DownOutlined } from '@abiz/icons-aeps';

const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.ItemGroup title="Group title">
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
    </Menu.ItemGroup>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

export default () => {
  return (
    <ConfigProvider>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Cascading menu <DownOutlined />
        </a>
      </Dropdown>
    </ConfigProvider>
  );
};
```
