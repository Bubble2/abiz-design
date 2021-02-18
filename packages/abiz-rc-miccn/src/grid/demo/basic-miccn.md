```tsx
/**
 * title: 基础栅格
 * desc: 从堆叠到水平排列。
 */

import React from 'react';
import { ConfigProvider, Row, Col } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Row>
          <Col span={24}>col</Col>
        </Row>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
      </>
    </ConfigProvider>
  );
};
```
