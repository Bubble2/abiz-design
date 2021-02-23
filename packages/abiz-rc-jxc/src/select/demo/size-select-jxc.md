---
order: 3
---

```tsx
/**
 * title: 三种大小
 * desc: 三种大小的选择框，当size分别为`large`和`small`时，输入框高度为`40px`和`24px`，默认高度为`32px`。
 */

import React from 'react';
import { ConfigProvider, Select, Radio } from '@abiz/rc-jxc';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

const SelectSizesDemo = () => {
  const [size, setSize] = React.useState('default');

  const handleSizeChange = e => {
    setSize(e.target.value);
  };

  return (
    <>
      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Select
        size={size}
        defaultValue="a1"
        onChange={handleChange}
        style={{ width: 200 }}
      >
        {children}
      </Select>
      <br />
      <Select
        mode="multiple"
        size={size}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        style={{ width: '100%' }}
      >
        {children}
      </Select>
      <br />
      <Select
        mode="tags"
        size={size}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        style={{ width: '100%' }}
      >
        {children}
      </Select>
    </>
  );
};

export default () => {
  return (
    <ConfigProvider>
      <SelectSizesDemo />
    </ConfigProvider>
  );
};
```

```css
.code-box-demo .ant-select {
  margin: 0 8px 10px 0;
}

.ant-row-rtl .code-box-demo .ant-select {
  margin: 0 0 10px 8px;
}

#components-select-demo-search-box .code-box-demo .ant-select {
  margin: 0;
}
```
