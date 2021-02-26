---
order: 0
---

```tsx
/**
 * title: 基本
 * desc: 最简单的下拉菜单。
 */

import React from 'react';
import { ConfigProvider, Menu, Dropdown } from '@abiz/rc-aeps';
import { DownOutlined } from '@abiz/icons-aeps';

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<DownOutlined />} disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

export default () => {
  return (
    <ConfigProvider>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Hover me <DownOutlined />
        </a>
      </Dropdown>
    </ConfigProvider>
  );
};
```
