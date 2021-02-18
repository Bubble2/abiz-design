```tsx
/**
 * title: 搜索
 * desc: 可以直接搜索选项并选择。
 */

import React from 'react';
import { ConfigProvider, Cascader } from '@abiz/rc-jxc';

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
          {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
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
            label: 'Zhong Hua men',
          },
        ],
      },
    ],
  },
];

function onChange(value, selectedOptions) {
  console.log(value, selectedOptions);
}

function filter(inputValue, path) {
  return path.some(
    option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
  );
}

export default () => {
  return (
    <ConfigProvider>
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="Please select"
        showSearch={{ filter }}
      />
    </ConfigProvider>
  );
};
```
