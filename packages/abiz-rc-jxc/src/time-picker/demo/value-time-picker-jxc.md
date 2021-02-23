---
order: 1
---

```tsx
/**
 * title: 受控组件
 * desc: value和onChange需要配合使用。
 */

import React, { useState } from 'react';
import { ConfigProvider, TimePicker } from '@abiz/rc-jxc';

const Demo = () => {
  const [value, setValue] = useState(null);

  const onChange = time => {
    setValue(time);
  };

  return <TimePicker value={value} onChange={onChange} />;
};

export default () => {
  return (
    <ConfigProvider>
      <Demo />
    </ConfigProvider>
  );
};
```
