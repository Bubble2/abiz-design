---
order: 6
---

```tsx
/**
 * title: 大小
 * desc: 不同大小的级联选择器。
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
      <>
        <Cascader size="large" options={options} onChange={onChange} />
        <br />
        <br />
        <Cascader options={options} onChange={onChange} />
        <br />
        <br />
        <Cascader size="small" options={options} onChange={onChange} />
        <br />
        <br />
      </>
    </ConfigProvider>
  );
};
```
