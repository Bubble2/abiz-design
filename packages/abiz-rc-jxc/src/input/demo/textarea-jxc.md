```tsx
/**
 * title: 文本域
 * desc: 用于多行输入。
 */

import React from 'react';
import { ConfigProvider, Input } from '@abiz/rc-jxc';

const { TextArea } = Input;

export default () => {
  return (
    <ConfigProvider>
      <TextArea rows={4} />
    </ConfigProvider>
  );
};
```
