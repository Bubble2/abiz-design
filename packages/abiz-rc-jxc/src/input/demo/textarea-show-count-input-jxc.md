---
order: 12
---

```tsx
/**
 * title: 带字数提示的文本域
 * desc: 展示字数提示。
 */

import React from 'react';
import { ConfigProvider, Input } from '@abiz/rc-jxc';

const { TextArea } = Input;

export default () => {
  return (
    <ConfigProvider>
      <TextArea showCount maxLength={100} />
    </ConfigProvider>
  );
};
```
