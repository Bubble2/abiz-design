---
order: 4
---

```tsx
/**
 * title: 排版
 * desc: 布局基础。子元素根据不同的值`start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。
 */

import React from 'react';
import { ConfigProvider, Row, Col, Divider } from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Divider orientation="left">sub-element align left</Divider>
        <Row justify="start">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <Divider orientation="left">sub-element align center</Divider>
        <Row justify="center">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <Divider orientation="left">sub-element align right</Divider>
        <Row justify="end">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <Divider orientation="left">sub-element monospaced arrangement</Divider>
        <Row justify="space-between">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <Divider orientation="left">sub-element align full</Divider>
        <Row justify="space-around">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
      </>
    </ConfigProvider>
  );
};
```

```css
#components-grid-demo-flex [class~='ant-row'] {
  background: rgba(128, 128, 128, 0.08);
}
```
