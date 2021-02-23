---
order: 3
---

```tsx
/**
 * title: 自定义输入组件
 * desc: 自定义输入组件。
 */

import React, { useState } from 'react';
import { ConfigProvider, AutoComplete, Input } from '@abiz/rc-aeps';

const { TextArea } = Input;

const Complete: React.FC = () => {
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const handleSearch = (value: string) => {
    setOptions(
      !value
        ? []
        : [
            { value },
            { value: value + value },
            { value: value + value + value },
          ],
    );
  };

  const handleKeyPress = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log('handleKeyPress', ev);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  return (
    <AutoComplete
      options={options}
      style={{ width: 200 }}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <TextArea
        placeholder="input here"
        className="custom"
        style={{ height: 50 }}
        onKeyPress={handleKeyPress}
      />
    </AutoComplete>
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
