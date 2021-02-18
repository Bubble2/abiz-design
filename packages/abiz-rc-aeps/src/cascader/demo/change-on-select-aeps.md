```tsx
/**
 * title: 选择即改变
 * desc: 这种交互允许只选中父级选项。
 */

import React from 'react';
import { ConfigProvider, Cascader } from '@abiz/rc-aeps';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hanzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

function onChange(value) {
  console.log(value);
}

export default () => {
  return (
    <ConfigProvider>
      <Cascader options={options} onChange={onChange} changeOnSelect />
    </ConfigProvider>
  );
};
```
