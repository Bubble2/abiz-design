```tsx
/**
 * title: 大数据
 * desc: 大数据展示。
 */

import React from 'react';
import { ConfigProvider, Tree } from '@abiz/rc-jxc';

const treeData = [];

for (let i = 0; i < 100; i += 1) {
  const children = [];

  for (let j = 0; j < 100; j += 1) {
    children.push({
      title: `child ${i}-${j}`,
      key: `l-${i}-${j}`,
    });
  }

  treeData.push({
    title: `parent ${i}`,
    key: `l-${i}`,
    children,
  });
}

const Demo = () => <Tree defaultExpandAll height={400} treeData={treeData} />;

export default () => {
  return (
    <ConfigProvider>
      <Demo />
    </ConfigProvider>
  );
};
```
