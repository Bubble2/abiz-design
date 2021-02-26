---
order: 3
---

```tsx
/**
 * title: 触发方式
 * desc: 默认是移入触发菜单，可以点击触发。
 */

import React from 'react';
import { ConfigProvider, Menu, Dropdown } from '@abiz/rc-miccn';
import { DownOutlined } from '@abiz/icons-miccn';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

export default () => {
  return (
    <ConfigProvider>
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Click me <DownOutlined />
        </a>
      </Dropdown>
    </ConfigProvider>
  );
};
```
