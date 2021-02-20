---
order: 2
---

```tsx
/**
 * title: 箭头
 * desc: 可以展示一个箭头。
 */

import React from 'react';
import { ConfigProvider, Menu, Dropdown, Button } from '@abiz/rc-jxc';

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

export default () => {
  return (
    <ConfigProvider>
      <>
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="bottomCenter" arrow>
          <Button>bottomCenter</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <Button>bottomRight</Button>
        </Dropdown>
        <br />
        <Dropdown overlay={menu} placement="topLeft" arrow>
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="topCenter" arrow>
          <Button>topCenter</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="topRight" arrow>
          <Button>topRight</Button>
        </Dropdown>
      </>
    </ConfigProvider>
  );
};
```

```css
#components-dropdown-demo-arrow .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
.ant-row-rtl #components-dropdown-demo-arrow .ant-btn {
  margin-right: 0;
  margin-bottom: 8px;
  margin-left: 8px;
}
```
