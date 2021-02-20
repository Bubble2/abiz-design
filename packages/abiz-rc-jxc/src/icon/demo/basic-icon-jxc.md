---
order: 0
---

```tsx
/**
 * title: 基本用法
 * desc: 通过 `@ant-design/icons` 引用 Icon 组件，不同主题的 Icon 组件名为图标名加主题做为后缀，也可以通过设置 `spin` 属性来实现动画旋转效果。
 */

import React from 'react';
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@abiz/icons-jxc';

export default () => {
  return (
    <ConfigProvider>
      <div className="icons-list">
        <HomeOutlined />
        <SettingFilled />
        <SmileOutlined />
        <SyncOutlined spin />
        <SmileOutlined rotate={180} />
        <LoadingOutlined />
      </div>
    </ConfigProvider>
  );
};
```
