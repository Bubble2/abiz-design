---
order: 4
---

```tsx
/**
 * title: 禁用选项
 * desc: 通过指定options里的`disabled`字段。
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
    disabled: true,
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
      <Cascader options={options} onChange={onChange} />
    </ConfigProvider>
  );
};
```
