---
order: 2
---

```tsx
/**
 * title: 三种大小
 * desc: 三种大小的输入框，大的用在表单中，中的为默认。
 */

import React from 'react';
import { ConfigProvider, TimePicker } from '@abiz/rc-aeps';
import moment from 'moment';

export default () => {
  return (
    <ConfigProvider>
      <>
        <TimePicker
          defaultValue={moment('12:08:23', 'HH:mm:ss')}
          size="large"
        />
        <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
        <TimePicker
          defaultValue={moment('12:08:23', 'HH:mm:ss')}
          size="small"
        />
      </>
    </ConfigProvider>
  );
};
```
