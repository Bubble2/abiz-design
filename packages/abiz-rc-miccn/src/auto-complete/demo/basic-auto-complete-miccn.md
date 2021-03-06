---
order: 0
---

```tsx
/**
 * title: 基本使用
 * desc: 基本使用，通过`options`设置自动完成的数据源。
 */

import React, { useState } from 'react';
import { ConfigProvider, AutoComplete } from '@abiz/rc-miccn';

const mockVal = (str: string, repeat: number = 1) => ({
  value: str.repeat(repeat),
});
const Complete: React.FC = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };
  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };
  const onChange = (data: string) => {
    setValue(data);
  };
  return (
    <>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      />
      <br />
      <br />
      <AutoComplete
        value={value}
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="control mode"
      />
    </>
  );
};

export default () => {
  return (
    <ConfigProvider>
      <Complete />
    </ConfigProvider>
  );
};
```
