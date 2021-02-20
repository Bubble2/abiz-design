---
order: 0
---

```tsx
/**
 * title: 基本
 * desc: 一个通用的日历面板，支持年/月切换。
 */

import React from 'react';
import { ConfigProvider, Calendar } from '@abiz/rc-miccn';

function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode);
}

export default () => {
  return (
    <ConfigProvider>
      <Calendar onPanelChange={onPanelChange} />
    </ConfigProvider>
  );
};
```
