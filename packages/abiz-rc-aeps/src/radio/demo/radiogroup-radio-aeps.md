---
order: 1
---

```tsx
/**
 * title: 单选组合
 * desc: 一组互斥的 Radio 配合使用。
 */

import React from 'react';
import { ConfigProvider, Radio } from '@abiz/rc-aeps';

const App = () => {
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
};

export default () => {
  return (
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
};
```
