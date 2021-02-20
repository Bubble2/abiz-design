---
order: 5
---

```tsx
/**
 * title: 布局
 * desc: Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。
 */

import React from 'react';
import { ConfigProvider, Checkbox, Row, Col } from '@abiz/rc-miccn';

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

export default () => {
  return (
    <ConfigProvider>
      <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
        <Row>
          <Col span={8}>
            <Checkbox value="A">A</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B">B</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="C">C</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="D">D</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="E">E</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </ConfigProvider>
  );
};
```
