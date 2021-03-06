---
order: 11
---

```tsx
/**
 * title: 紧凑型
 * desc: 两种紧凑型的列表，小型列表只用于对话框内。
 */

import React from 'react';
import { ConfigProvider, Table } from '@abiz/rc-aeps';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

export default () => {
  return (
    <ConfigProvider>
      <div>
        <h4>Middle size table</h4>
        <Table columns={columns} dataSource={data} size="middle" />
        <h4>Small size table</h4>
        <Table columns={columns} dataSource={data} size="small" />
      </div>
    </ConfigProvider>
  );
};
```
