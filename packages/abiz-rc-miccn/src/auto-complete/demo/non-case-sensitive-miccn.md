```tsx
/**
 * title: 不区分大小写
 * desc: 不区分大小写的 AutoComplete
 */

import React from 'react';
import { ConfigProvider, AutoComplete } from '@abiz/rc-miccn';

const options = [
  { value: 'Burns Bay Road' },
  { value: 'Downing Street' },
  { value: 'Wall Street' },
];

const Complete: React.FC = () => (
  <AutoComplete
    style={{ width: 200 }}
    options={options}
    placeholder="try to type `b`"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);

export default () => {
  return (
    <ConfigProvider>
      <Complete />
    </ConfigProvider>
  );
};
```
