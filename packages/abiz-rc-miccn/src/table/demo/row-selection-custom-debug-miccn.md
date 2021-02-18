```tsx
/**
 * title: 自定义选择项组
 * desc: 自定义选项分组。
 */

import React from 'react';
import { ConfigProvider, Table } from '@abiz/rc-miccn';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: i % 2 === 0 ? `Edward King ${i}` : 'Another Row',
  });
}

const App = () => {
  const rowSelection = {
    renderCell: (checked, record, index, node) => ({
      props: { rowSpan: index % 2 === 0 ? 2 : 0 },
      children: (
        <>
          {String(checked)}: {node}
        </>
      ),
    }),
  };
  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
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
