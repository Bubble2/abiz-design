```tsx
/**
 * title: 基本
 * desc: 点击 TimePicker，然后可以在浮层中选择或者输入某一时间。
 */

import React from 'react';
import { ConfigProvider, TimePicker } from '@abiz/rc-aeps';
import moment from 'moment';

function onChange(time, timeString) {
  console.log(time, timeString);
}

export default () => {
  return (
    <ConfigProvider>
      <TimePicker
        onChange={onChange}
        defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
      />
    </ConfigProvider>
  );
};
```
