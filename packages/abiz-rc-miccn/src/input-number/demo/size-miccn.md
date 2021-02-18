```tsx
/**
 * title: 三种大小
 * desc: 三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。
 */

import React from 'react';
import { ConfigProvider, InputNumber } from '@abiz/rc-miccn';

function onChange(value) {
  console.log('changed', value);
}

export default () => {
  return (
    <ConfigProvider>
      <div className="site-input-number-wrapper">
        <InputNumber
          size="large"
          min={1}
          max={100000}
          defaultValue={3}
          onChange={onChange}
        />
        <InputNumber
          min={1}
          max={100000}
          defaultValue={3}
          onChange={onChange}
        />
        <InputNumber
          size="small"
          min={1}
          max={100000}
          defaultValue={3}
          onChange={onChange}
        />
      </div>
    </ConfigProvider>
  );
};
```

```css
.code-box-demo .ant-input-number {
  margin-right: 10px;
}
.ant-row-rtl .code-box-demo .ant-input-number {
  margin-right: 0;
  margin-left: 10px;
}
```
