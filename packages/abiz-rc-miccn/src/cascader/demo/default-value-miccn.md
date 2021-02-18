```tsx
/**
 * title: 默认值
 * desc: 默认值通过数组的方式指定。
 */

import React from 'react';
import { ConfigProvider, Cascader } from '@abiz/rc-miccn';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
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
      <Cascader
        defaultValue={['zhejiang', 'hangzhou', 'xihu']}
        options={options}
        onChange={onChange}
      />
    </ConfigProvider>
  );
};
```
