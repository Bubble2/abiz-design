---
order: 5
---

```tsx
/**
 * title: 带下拉菜单的面包屑
 * desc: 面包屑支持下拉菜单。
 */

import React from 'react';
import { ConfigProvider, Breadcrumb, Menu } from '@abiz/rc-jxc';

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        General
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Layout
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    </Menu.Item>
  </Menu>
);

export default () => {
  return (
    <ConfigProvider>
      <Breadcrumb>
        <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Component</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item overlay={menu}>
          <a href="">General</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Button</Breadcrumb.Item>
      </Breadcrumb>
    </ConfigProvider>
  );
};
```
