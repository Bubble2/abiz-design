---
order: 2
---

```tsx
/**
 * title: 文字和图标
 * desc: 带有文字和图标。
 */

import React from 'react';
import { ConfigProvider, Switch } from '@abiz/rc-miccn';
import { CloseOutlined, CheckOutlined } from '@abiz/icons-miccn';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Switch
          checkedChildren="开启"
          unCheckedChildren="关闭"
          defaultChecked
        />
        <br />
        <Switch checkedChildren="1" unCheckedChildren="0" />
        <br />
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />
      </>
    </ConfigProvider>
  );
};
```
