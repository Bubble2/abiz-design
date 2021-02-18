```tsx
/**
 * title: 自定义文字格式
 * desc: <span></span>`format` 属性指定格式。
 */

import React from 'react';
import { ConfigProvider, Progress } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Progress
          type="circle"
          percent={75}
          format={percent => `${percent} Days`}
        />
        <Progress type="circle" percent={100} format={() => 'Done'} />
      </>
    </ConfigProvider>
  );
};
```
