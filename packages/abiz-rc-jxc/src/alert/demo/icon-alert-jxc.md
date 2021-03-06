---
order: 4
---

```tsx
/**
 * title: 图标
 * desc: 可口的图标让信息类型更加醒目。
 */

import React from 'react';
import { ConfigProvider, Alert } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Alert message="Success Tips" type="success" showIcon />
        <Alert message="Informational Notes" type="info" showIcon />
        <Alert message="Warning" type="warning" showIcon closable />
        <Alert message="Error" type="error" showIcon />
        <Alert
          message="Success Tips"
          description="Detailed description and advice about successful copywriting."
          type="success"
          showIcon
        />
        <Alert
          message="Informational Notes"
          description="Additional description and information about copywriting."
          type="info"
          showIcon
        />
        <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
          closable
        />
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
        />
      </>
    </ConfigProvider>
  );
};
```
