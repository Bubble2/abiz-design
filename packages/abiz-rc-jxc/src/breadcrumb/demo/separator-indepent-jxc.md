```tsx
/**
 * title: 分隔符
 * desc: 使用 `Breadcrumb.Separator` 可以自定义分隔符。
 */

import React from 'react';
import { ConfigProvider, Breadcrumb } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Breadcrumb separator="">
        <Breadcrumb.Item>Location</Breadcrumb.Item>
        <Breadcrumb.Separator>:</Breadcrumb.Separator>
        <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </ConfigProvider>
  );
};
```
