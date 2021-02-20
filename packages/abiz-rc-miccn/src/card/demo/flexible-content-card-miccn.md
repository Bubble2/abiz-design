---
order: 3
---

```tsx
/**
 * title: 更灵活的内容展示
 * desc: 可以利用 `Card.Meta` 支持更灵活的内容。
 */

import React from 'react';
import { ConfigProvider, Card } from '@abiz/rc-miccn';

const { Meta } = Card;

export default () => {
  return (
    <ConfigProvider>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </ConfigProvider>
  );
};
```
