---
order: 1
---

```tsx
/**
 * title: 迷你版
 * desc: 迷你版的步骤条，通过设置`<Stepssize="small">`启用.
 */

import React from 'react';
import { ConfigProvider, Steps } from '@abiz/rc-jxc';

const { Step } = Steps;

export default () => {
  return (
    <ConfigProvider>
      <Steps size="small" current={1}>
        <Step title="Finished" />
        <Step title="In Progress" />
        <Step title="Waiting" />
      </Steps>
    </ConfigProvider>
  );
};
```
