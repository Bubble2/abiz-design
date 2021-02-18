```tsx
/**
 * title: 单位
 * desc: 通过前缀和后缀添加单位。
 */

import React from 'react';
import { ConfigProvider, Statistic, Row, Col } from '@abiz/rc-miccn';
import { LikeOutlined } from '@ant-design/icons';

export default () => {
  return (
    <ConfigProvider>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
        </Col>
        <Col span={12}>
          <Statistic title="Unmerged" value={93} suffix="/ 100" />
        </Col>
      </Row>
    </ConfigProvider>
  );
};
```
