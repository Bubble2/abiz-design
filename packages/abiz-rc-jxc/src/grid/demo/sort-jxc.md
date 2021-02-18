```tsx
/**
 * title: 栅格排序
 * desc: 列排序。
 */

import React from 'react';
import { ConfigProvider, Row, Col } from '@abiz/rc-jxc';

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
