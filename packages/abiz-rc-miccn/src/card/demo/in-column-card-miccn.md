---
order: 4
---

```tsx
/**
 * title: 栅格卡片
 * desc: 在系统概览页面常常和栅格进行配合。
 */

import React from 'react';
import { ConfigProvider, Card, Col, Row } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
};
```
