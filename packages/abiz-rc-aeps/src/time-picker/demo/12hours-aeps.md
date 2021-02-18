```tsx
/**
 * title: 12 小时制
 * desc: 12 小时制的时间选择器，默认的 format 为 `h:mm:ss a`。
 */

import React from 'react';
import { ConfigProvider, TimePicker } from '@abiz/rc-aeps';

function onChange(time, timeString) {
  console.log(time, timeString);
}

export default () => {
  return (
    <ConfigProvider>
      <>
        <TimePicker use12Hours onChange={onChange} />
        <TimePicker
          use12Hours
          format="h:mm:ss A"
          onChange={onChange}
          style={{ width: 140 }}
        />
        <TimePicker use12Hours format="h:mm a" onChange={onChange} />
      </>
    </ConfigProvider>
  );
};
```
