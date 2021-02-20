---
order: 12
---

```tsx
/**
 * title: 扩展菜单
 * desc: 使用 `dropdownRender` 对下拉菜单进行自由扩展。
 */

import React from 'react';
import { ConfigProvider, Cascader, Divider } from '@abiz/rc-aeps';

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

function dropdownRender(menus) {
  return (
    <div>
      {menus}
      <Divider style={{ margin: 0 }} />
      <div style={{ padding: 8 }}>The footer is not very short.</div>
    </div>
  );
}

export default () => {
  return (
    <ConfigProvider>
      <Cascader
        options={options}
        dropdownRender={dropdownRender}
        placeholder="Please select"
      />
    </ConfigProvider>
  );
};
```
