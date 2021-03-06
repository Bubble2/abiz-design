---
order: 31
---

```tsx
/**
 * title: 响应式
 * desc: 响应式配置列的展示。
 */

import React from 'react';
import { ConfigProvider, Table } from '@abiz/rc-aeps';

const columns = [
  {
    title: 'Name (all screens)',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age (medium screen or bigger)',
    dataIndex: 'age',
    key: 'age',
    responsive: ['md'],
  },
  {
    title: 'Address (large screen or bigger)',
    dataIndex: 'address',
    key: 'address',
    responsive: ['lg'],
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
];

export default () => {
  return (
    <ConfigProvider>
      <Table columns={columns} dataSource={data} />
    </ConfigProvider>
  );
};
```
