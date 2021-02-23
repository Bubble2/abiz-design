---
order: 10
---

```tsx
/**
 * title: 自定义字段名
 * desc: 自定义字段名。
 */

import React from 'react';
import { ConfigProvider, Cascader } from '@abiz/rc-miccn';

const options = [
  {
    code: 'zhejiang',
    name: 'Zhejiang',
    items: [
      {
        code: 'hangzhou',
        name: 'Hangzhou',
        items: [
          {
            code: 'xihu',
            name: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    code: 'jiangsu',
    name: 'Jiangsu',
    items: [
      {
        code: 'nanjing',
        name: 'Nanjing',
        items: [
          {
            code: 'zhonghuamen',
            name: 'Zhong Hua Men',
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
        fieldNames={{ label: 'name', value: 'code', children: 'items' }}
        options={options}
        onChange={onChange}
        placeholder="Please select"
      />
    </ConfigProvider>
  );
};
```
