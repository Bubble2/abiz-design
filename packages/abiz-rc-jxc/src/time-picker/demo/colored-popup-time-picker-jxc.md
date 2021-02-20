---
order: 9
---

```tsx
/**
 * title: 色付きポップアップ
 * desc: カスタムクラスを `TimePicker`ポップアップに渡す
 */

import React from 'react';
import { ConfigProvider, TimePicker } from '@abiz/rc-jxc';
import moment from 'moment';

const onChange = (time, timeString) => {
  console.log(time, timeString);
};

export default () => {
  return (
    <ConfigProvider>
      <TimePicker
        onChange={onChange}
        defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
        popupClassName="myCustomClassName"
      />
    </ConfigProvider>
  );
};
```

```css
.myCustomClassName .ant-picker-time-panel-cell-inner {
  color: red !important;
}
```
