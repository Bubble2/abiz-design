```tsx
/**
 * title: 隐藏后销毁
 * desc: 通过 `destroyTooltipOnHide` 控制提示关闭时是否销毁 dom 节点。
 */

import React from 'react';
import { ConfigProvider, Tooltip } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <Tooltip destroyTooltipOnHide={{ keepParent: false }} title="prompt text">
        <span>Tooltip will destroy when hidden.</span>
      </Tooltip>
    </ConfigProvider>
  );
};
```
