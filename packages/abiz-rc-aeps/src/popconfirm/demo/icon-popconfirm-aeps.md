---
order: 4
---

```tsx
/**
 * title: 自定义 Icon 图标
 * desc: 自定义提示 `icon`。
 */

import React from 'react';
import { ConfigProvider, Popconfirm } from '@abiz/rc-aeps';
import { QuestionCircleOutlined } from '@abiz/icons-aeps';

export default () => {
  return (
    <ConfigProvider>
      <Popconfirm
        title="Are you sure？"
        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      >
        <a href="#">Delete</a>
      </Popconfirm>
    </ConfigProvider>
  );
};
```
