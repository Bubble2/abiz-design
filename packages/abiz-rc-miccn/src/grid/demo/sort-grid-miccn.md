---
order: 3
---

```tsx
/**
 * title: 栅格排序
 * desc: 列排序。通过使用`push`和`pull`类就可以很容易的改变列（column）的顺序。
 */

import React from 'react';
import { ConfigProvider, Row, Col } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <Row>
        <Col span={18} push={6}>
          col-18 col-push-6
        </Col>
        <Col span={6} pull={18}>
          col-6 col-pull-18
        </Col>
      </Row>
    </ConfigProvider>
  );
};
```
