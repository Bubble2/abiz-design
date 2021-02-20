---
order: 6
---

```tsx
/**
 * title: 网格型内嵌卡片
 * desc: 一种常见的卡片内容区隔模式。
 */

import React from 'react';
import { ConfigProvider, Card } from '@abiz/rc-jxc';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

export default () => {
  return (
    <ConfigProvider>
      <Card title="Card Title">
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          Content
        </Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
      </Card>
    </ConfigProvider>
  );
};
```
