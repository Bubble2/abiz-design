```tsx
/**
 * title: 在卡片中使用
 * desc: 在卡片中展示统计数值。
 */

import React from 'react';
import { ConfigProvider, Statistic, Card, Row, Col } from '@abiz/rc-miccn';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export default () => {
  return (
    <ConfigProvider>
      <div className="site-statistic-demo-card">
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
};
```

```css
.site-statistic-demo-card {
  padding: 30px;
  background: #ececec;
}
```
