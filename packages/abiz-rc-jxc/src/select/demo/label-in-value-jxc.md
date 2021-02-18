```tsx
/**
 * title: 获得选项的文本
 * desc: 默认情况下 `onChange` 里只能拿到 `value`，如果需要拿到选中的节点文本 `label`，可以使用 `labelInValue` 属性。
 */

import React from 'react';
import { ConfigProvider, Select } from '@abiz/rc-jxc';

const { Option } = Select;

function handleChange(value) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

export default () => {
  return (
    <ConfigProvider>
      <Select
        labelInValue
        defaultValue={{ value: 'lucy' }}
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack (100)</Option>
        <Option value="lucy">Lucy (101)</Option>
      </Select>
    </ConfigProvider>
  );
};
```
