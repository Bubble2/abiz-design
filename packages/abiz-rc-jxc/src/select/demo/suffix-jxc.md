```tsx
/**
 * title: 后缀图标
 * desc: 基本使用。
 */

import React from 'react';
import { ConfigProvider, Select } from '@abiz/rc-jxc';
import { SmileOutlined, MehOutlined } from '@ant-design/icons';

const smileIcon = <SmileOutlined />;
const mehIcon = <MehOutlined />;
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default () => {
  return (
    <ConfigProvider>
      <>
        <Select
          suffixIcon={smileIcon}
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select
          suffixIcon={mehIcon}
          defaultValue="lucy"
          style={{ width: 120 }}
          disabled
        >
          <Option value="lucy">Lucy</Option>
        </Select>
      </>
    </ConfigProvider>
  );
};
```
