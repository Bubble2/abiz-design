---
order: 1
---

```tsx
/**
 * title: 手风琴
 * desc: 手风琴，每次只打开一个tab。
 */

import React from 'react';
import { ConfigProvider, Collapse } from '@abiz/rc-aeps';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default () => {
  return (
    <ConfigProvider>
      <Collapse accordion>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </ConfigProvider>
  );
};
```
