---
order: 3
---

```tsx
/**
 * title: 简洁风格
 * desc: 一套没有边框的简洁样式。
 */

import React from 'react';
import { ConfigProvider, Collapse } from '@abiz/rc-aeps';

const { Panel } = Collapse;

const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found as a welcome guest in many households across
    the world.
  </p>
);

export default () => {
  return (
    <ConfigProvider>
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header="This is panel header 1" key="1">
          {text}
        </Panel>
        <Panel header="This is panel header 2" key="2">
          {text}
        </Panel>
        <Panel header="This is panel header 3" key="3">
          {text}
        </Panel>
      </Collapse>
    </ConfigProvider>
  );
};
```
