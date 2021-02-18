```tsx
/**
 * title: 自动调整位置
 * desc: 气泡框不可见时自动调整位置
 */

import React from 'react';
import { ConfigProvider, Tooltip, Button } from '@abiz/rc-jxc';

const wrapStyles = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9',
};

export default () => {
  return (
    <ConfigProvider>
      <div style={wrapStyles}>
        <Tooltip
          placement="left"
          title="Prompt Text"
          getPopupContainer={trigger => trigger.parentElement}
        >
          <Button>Adjust automatically / 自动调整</Button>
        </Tooltip>
        <br />
        <Tooltip
          placement="left"
          title="Prompt Text"
          getPopupContainer={trigger => trigger.parentElement}
          autoAdjustOverflow={false}
        >
          <Button>Ignore / 不处理</Button>
        </Tooltip>
      </div>
    </ConfigProvider>
  );
};
```
