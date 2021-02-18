```tsx
/**
 * title: 自定义图标
 * desc: 可以针对不同的节点定制图标。
 */

import React from 'react';
import { ConfigProvider, Tree } from '@abiz/rc-jxc';
import {
  DownOutlined,
  FrownOutlined,
  SmileOutlined,
  MehOutlined,
  FrownFilled,
} from '@ant-design/icons';

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    icon: <SmileOutlined />,
    children: [
      {
        title: 'leaf',
        key: '0-0-0',
        icon: <MehOutlined />,
      },
      {
        title: 'leaf',
        key: '0-0-1',
        icon: ({ selected }) =>
          selected ? <FrownFilled /> : <FrownOutlined />,
      },
    ],
  },
];

export default () => {
  return (
    <ConfigProvider>
      <Tree
        showIcon
        defaultExpandAll
        defaultSelectedKeys={['0-0-0']}
        switcherIcon={<DownOutlined />}
        treeData={treeData}
      />
    </ConfigProvider>
  );
};
```
