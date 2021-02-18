```tsx
/**
 * title: 状态点
 * desc: 用于表示状态的小圆点。
 */

import React from 'react';
import { ConfigProvider, Badge } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <div>
        <Badge status="success" />
        <Badge status="error" />
        <Badge status="default" />
        <Badge status="processing" />
        <Badge status="warning" />
        <br />
        <Badge status="success" text="Success" />
        <br />
        <Badge status="error" text="Error" />
        <br />
        <Badge status="default" text="Default" />
        <br />
        <Badge status="processing" text="Processing" />
        <br />
        <Badge status="warning" text="Warning" />
      </div>
    </ConfigProvider>
  );
};
```
