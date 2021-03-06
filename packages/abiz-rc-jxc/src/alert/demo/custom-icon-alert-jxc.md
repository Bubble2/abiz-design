---
order: 12
---

```tsx
/**
 * title: 自定义图标
 * desc: 可口的图标让信息类型更加醒目。
 */

import React from 'react';
import { ConfigProvider, Alert } from '@abiz/rc-jxc';
import { SmileOutlined } from '@abiz/icons-jxc';

const icon = <SmileOutlined />;

export default () => {
  return (
    <ConfigProvider>
      <>
        <Alert icon={icon} message="showIcon = false" type="success" />
        <Alert icon={icon} message="Success Tips" type="success" showIcon />
        <Alert icon={icon} message="Informational Notes" type="info" showIcon />
        <Alert icon={icon} message="Warning" type="warning" showIcon />
        <Alert icon={icon} message="Error" type="error" showIcon />
        <Alert
          icon={icon}
          message="Success Tips"
          description="Detailed description and advices about successful copywriting."
          type="success"
          showIcon
        />
        <Alert
          icon={icon}
          message="Informational Notes"
          description="Additional description and informations about copywriting."
          type="info"
          showIcon
        />
        <Alert
          icon={icon}
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
        />
        <Alert
          icon={icon}
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
