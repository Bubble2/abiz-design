```tsx
/**
 * title: 自动换行
 * desc: 自动换行。
 */

import React from 'react';
import { ConfigProvider, Space, Button } from '@abiz/rc-aeps';

const Demo = () => (
  <Space size={[8, 16]} wrap>
    {new Array(20).fill(null).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Button key={index}>Button</Button>
    ))}
  </Space>
);

export default () => {
  return (
    <ConfigProvider>
      <Demo />
    </ConfigProvider>
  );
};
```
