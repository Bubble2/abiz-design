```tsx
/**
 * title: 对齐
 * desc: 子元素垂直对齐。
 */

import React from 'react';
import { ConfigProvider, Row, Col, Divider } from '@abiz/rc-miccn';

const DemoBox = props => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

export default () => {
  return (
    <ConfigProvider>
      <>
        <Divider orientation="left">Align Top</Divider>
        <Row justify="center" align="top">
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>

        <Divider orientation="left">Align Middle</Divider>
        <Row justify="space-around" align="middle">
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>

        <Divider orientation="left">Align Bottom</Divider>
        <Row justify="space-between" align="bottom">
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>
      </>
    </ConfigProvider>
  );
};
```

```css
#components-grid-demo-flex-align [class~='ant-row'] {
  background: rgba(128, 128, 128, 0.08);
}
```
