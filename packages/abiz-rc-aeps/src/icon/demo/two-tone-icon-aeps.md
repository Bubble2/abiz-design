---
order: 1
---

```tsx
/**
 * title: 多色图标
 * desc: 双色图标可以通过`twoToneColor`属性设置主题色。
 */

import React from 'react';
import { ConfigProvider } from '@abiz/rc-aeps';
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from '@abiz/icons-aeps';

export default () => {
  return (
    <ConfigProvider>
      <div className="icons-list">
        <SmileTwoTone />
        <HeartTwoTone twoToneColor="#eb2f96" />
        <CheckCircleTwoTone twoToneColor="#52c41a" />
      </div>
    </ConfigProvider>
  );
};
```
