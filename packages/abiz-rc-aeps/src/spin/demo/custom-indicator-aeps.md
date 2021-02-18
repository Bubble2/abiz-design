```tsx
/**
 * title: 自定义指示符
 * desc: 使用自定义指示符。
 */

import React from 'react';
import { ConfigProvider, Spin } from '@abiz/rc-aeps';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default () => {
  return (
    <ConfigProvider>
      <Spin indicator={antIcon} />
    </ConfigProvider>
  );
};
```
