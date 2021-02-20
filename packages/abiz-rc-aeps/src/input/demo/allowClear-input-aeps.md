---
order: 11
---

```tsx
/**
 * title: 带移除图标
 * desc: 带移除图标的输入框，点击图标删除所有内容。
 */

import React from 'react';
import { ConfigProvider, Input } from '@abiz/rc-aeps';

const { TextArea } = Input;

const onChange = e => {
  console.log(e);
};

export default () => {
  return (
    <ConfigProvider>
      <>
        <Input
          placeholder="input with clear icon"
          allowClear
          onChange={onChange}
        />
        <br />
        <br />
        <TextArea
          placeholder="textarea with clear icon"
          allowClear
          onChange={onChange}
        />
      </>
    </ConfigProvider>
  );
};
```
