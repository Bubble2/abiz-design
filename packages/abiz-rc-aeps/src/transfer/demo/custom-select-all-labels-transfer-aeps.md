---
order: 99
---

```tsx
/**
 * title: 自定义全选文字
 * desc: 自定义穿梭框全选按钮的文字。
 */

import React, { useState } from 'react';
import { ConfigProvider, Transfer } from '@abiz/rc-aeps';

const mockData = [];
for (let i = 0; i < 10; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
  });
}

const oriTargetKeys = mockData
  .filter(item => +item.key % 3 > 1)
  .map(item => item.key);

const selectAllLabels = [
  'Select All',
  ({ selectedCount, totalCount }) => `${selectedCount}/${totalCount}`,
];

const App = () => {
  const [targetKeys, setTargetKeys] = useState(oriTargetKeys);
  return (
    <Transfer
      dataSource={mockData}
      targetKeys={targetKeys}
      onChange={setTargetKeys}
      render={item => item.title}
      selectAllLabels={selectAllLabels}
    />
  );
};

export default () => {
  return (
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
};
```
