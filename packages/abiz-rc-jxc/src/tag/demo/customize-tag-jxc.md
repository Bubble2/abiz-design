---
order: 8
---

```tsx
/**
 * title: 自定义关闭按钮
 * desc: 可用`closeIcon`自定义关闭按钮。
 */

import React from 'react';
import { ConfigProvider, Tag } from '@abiz/rc-jxc';
import { CloseCircleOutlined } from '@abiz/icons-jxc';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Tag closable closeIcon="关 闭">
          Tag1
        </Tag>
        <Tag closable closeIcon={<CloseCircleOutlined />}>
          Tag2
        </Tag>
      </>
    </ConfigProvider>
  );
};
```
