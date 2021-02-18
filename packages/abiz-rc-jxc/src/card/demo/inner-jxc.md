```tsx
/**
 * title: 内部卡片
 * desc: 可以放在普通卡片内部，展示多层级结构的信息。
 */

import React from 'react';
import { ConfigProvider, Card } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Card title="Card title">
        <Card
          type="inner"
          title="Inner Card title"
          extra={<a href="#">More</a>}
        >
          Inner Card content
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Inner Card title"
          extra={<a href="#">More</a>}
        >
          Inner Card content
        </Card>
      </Card>
    </ConfigProvider>
  );
};
```
