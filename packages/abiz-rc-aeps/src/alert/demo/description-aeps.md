```tsx
/**
 * title: 含有辅助性文字介绍
 * desc: 含有辅助性文字介绍的警告提示。
 */

import React from 'react';
import { ConfigProvider, Alert } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Alert
          message="Success Text"
          description="Success Description Success Description Success Description"
          type="success"
        />
        <Alert
          message="Info Text"
          description="Info Description Info Description Info Description Info Description"
          type="info"
        />
        <Alert
          message="Warning Text"
          description="Warning Description Warning Description Warning Description Warning Description"
          type="warning"
        />
        <Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description"
          type="error"
        />
      </>
    </ConfigProvider>
  );
};
```
