---
order: 99
---

```tsx
/**
 * title: 后缀图标
 * desc: 点击TimePicker，然后可以在浮层中选择或者输入某一时间。
 */

import React from 'react';
import { ConfigProvider, TimePicker } from '@abiz/rc-aeps';
import moment from 'moment';
import { SmileOutlined } from '@abiz/icons-aeps';

function onChange(time, timeString) {
  console.log(time, timeString);
}

export default () => {
  return (
    <ConfigProvider>
      <TimePicker
        suffixIcon={<SmileOutlined />}
        onChange={onChange}
        defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
      />
    </ConfigProvider>
  );
};
```
