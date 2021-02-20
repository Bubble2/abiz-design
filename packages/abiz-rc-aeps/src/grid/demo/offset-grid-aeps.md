---
order: 2
---

```tsx
/**
 * title: 左右偏移
 * desc: 列偏移。使用 `offset` 可以将列向右侧偏。例如，`offset={4}` 将元素向右侧偏移了 4 个列（column）的宽度。
 */

import React from 'react';
import { ConfigProvider, Row, Col } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8} offset={8}>
            col-8
          </Col>
        </Row>
        <Row>
          <Col span={6} offset={6}>
            col-6 col-offset-6
          </Col>
          <Col span={6} offset={6}>
            col-6 col-offset-6
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            col-12 col-offset-6
          </Col>
        </Row>
      </>
    </ConfigProvider>
  );
};
```
