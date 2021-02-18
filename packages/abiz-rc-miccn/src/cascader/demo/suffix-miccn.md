```tsx
/**
 * title: 自定义图标
 * desc: 通过 `suffixIcon` 自定义选择框后缀图标，通过 `expandIcon` 自定义次级菜单展开图标。
 */

import React from 'react';
import { ConfigProvider, Cascader } from '@abiz/rc-miccn';
import { SmileOutlined } from '@ant-design/icons';

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
        <Cascader
          suffixIcon={<SmileOutlined />}
          options={options}
          onChange={onChange}
          placeholder="Please select"
        />
        <br />
        <br />
        <Cascader
          suffixIcon="ab"
          options={options}
          onChange={onChange}
          placeholder="Please select"
        />
        <br />
        <br />
        <Cascader
          expandIcon={<SmileOutlined />}
          options={options}
          onChange={onChange}
          placeholder="Please select"
        />
        <br />
        <br />
        <Cascader
          expandIcon="ab"
          options={options}
          onChange={onChange}
          placeholder="Please select"
        />
      </>
    </ConfigProvider>
  );
};
```
