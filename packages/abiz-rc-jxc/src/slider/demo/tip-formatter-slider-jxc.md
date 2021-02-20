---
order: 3
---

```tsx
/**
 * title: 自定义提示
 * desc: 使用 `tipFormatter` 可以格式化 `Tooltip` 的内容，设置 `tipFormatter={null}`，则隐藏 `Tooltip`。
 */

import React from 'react';
import { ConfigProvider, Slider } from '@abiz/rc-jxc';

function formatter(value) {
  return `${value}%`;
}

export default () => {
  return (
    <ConfigProvider>
      <>
        <Slider tipFormatter={formatter} />
        <Slider tipFormatter={null} />
      </>
    </ConfigProvider>
  );
};
```
