---
order: 5
---

```tsx
/**
 * title: 多个按钮组合
 * desc: 按钮组合使用时，推荐使用1个主操作+n个次操作，3个以上操作时把更多操作放到[Dropdown.Button](/components/dropdown/#components-dropdown-demo-dropdown-button)中组合使用。
 */

import React from 'react';
import { ConfigProvider, Button, Menu, Dropdown } from '@abiz/rc-aeps';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

export default () => {
  return (
    <ConfigProvider>
      <>
        <Button type="primary">primary</Button>
        <Button>secondary</Button>
        <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
      </>
    </ConfigProvider>
  );
};
```
