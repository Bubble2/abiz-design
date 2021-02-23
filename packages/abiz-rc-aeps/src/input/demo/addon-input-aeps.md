---
order: 2
---

```tsx
/**
 * title: 前置/后置标签
 * desc: 用于配置一些固定组合。
 */

import React from 'react';
import { ConfigProvider, Input, Select } from '@abiz/rc-aeps';
import { SettingOutlined } from '@abiz/icons-aeps';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" className="select-after">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

export default () => {
  return (
    <ConfigProvider>
      <>
        <div style={{ marginBottom: 16 }}>
          <Input
            addonBefore="http://"
            addonAfter=".com"
            defaultValue="mysite"
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input
            addonBefore={selectBefore}
            addonAfter={selectAfter}
            defaultValue="mysite"
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
        </div>
      </>
    </ConfigProvider>
  );
};
```

```css
.select-before {
  width: 90px;
}

.select-after {
  width: 80px;
}

[data-theme='compact'] .select-before {
  width: 71px;
}

[data-theme='compact'] .select-after {
  width: 65px;
}
```
