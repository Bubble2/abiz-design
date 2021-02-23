---
order: 4.1
---

```tsx
/**
 * title: 测试栅格列表
 * desc: List`grid`在各种情况下的样式表现，如Fragment和封装了List.Item.
 */

import React from 'react';
import { ConfigProvider, List, Card } from '@abiz/rc-jxc';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

const ListItem = () => (
  <List.Item>
    <Card title="title">Card content</Card>
  </List.Item>
);

export default () => {
  return (
    <ConfigProvider>
      <>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <>
              <List.Item>
                <Card title={item.title}>Card content</Card>
              </List.Item>
            </>
          )}
        />
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={() => <ListItem />}
        />
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={() => (
            <>
              <ListItem />
              <div />
            </>
          )}
        />
      </>
    </ConfigProvider>
  );
};
```
