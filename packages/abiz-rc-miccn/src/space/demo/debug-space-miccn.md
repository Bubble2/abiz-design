---
order: 99
---

```tsx
/**
 * title: 多样的 Child
 * desc: Debug usage
 */

import React from 'react';
import { ConfigProvider, Space, Button, Popconfirm } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <Space>
        <>
          Button
          <Button>Button</Button>
        </>
        Button
        <Popconfirm
          title="Are you sure delete this task?"
          okText="Yes"
          cancelText="No"
        >
          <Button>Delete</Button>
        </Popconfirm>
        <Popconfirm
          title="Are you sure delete this task?"
          okText="Yes"
          cancelText="No"
        >
          <Button disabled>Delete</Button>
        </Popconfirm>
        {null}
        {false}
        {1}
        Button
        {null}
        {undefined}
      </Space>
    </ConfigProvider>
  );
};
```
