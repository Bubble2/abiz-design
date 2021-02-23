---
order: 9
---

```tsx
/**
 * title: 虚拟滚动
 * desc: 使用`height`属性则切换为虚拟滚动。
 */

import React from 'react';
import { ConfigProvider, Tree } from '@abiz/rc-aeps';

function dig(path = '0', level = 3) {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const key = `${path}-${i}`;
    const treeNode = {
      title: key,
      key,
    };

    if (level > 0) {
      treeNode.children = dig(key, level - 1);
    }

    list.push(treeNode);
  }
  return list;
}

const treeData = dig();

export default () => {
  return (
    <ConfigProvider>
      <Tree treeData={treeData} height={233} defaultExpandAll />
    </ConfigProvider>
  );
};
```
