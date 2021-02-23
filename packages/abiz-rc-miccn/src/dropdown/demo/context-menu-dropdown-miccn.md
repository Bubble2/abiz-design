---
order: 8
---

```tsx
/**
 * title: 右键菜单
 * desc: 默认是移入触发菜单，可以点击鼠标右键触发。
 */

import React from 'react';
import { ConfigProvider, Menu, Dropdown } from '@abiz/rc-miccn';

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

export default () => {
  return (
    <ConfigProvider>
      <Dropdown overlay={menu} trigger={['contextMenu']}>
        <div
          className="site-dropdown-context-menu"
          style={{
            textAlign: 'center',
            height: 200,
            lineHeight: '200px',
          }}
        >
          Right Click on here
        </div>
      </Dropdown>
    </ConfigProvider>
  );
};
```

```css
.site-dropdown-context-menu {
  color: #777;
  background: #f7f7f7;
}
```
