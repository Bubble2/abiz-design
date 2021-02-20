---
order: 9
---

```tsx
/**
 * title: 自定义点状步骤条
 * desc: 为点状步骤条增加自定义展示。
 */

import React from 'react';
import { ConfigProvider, Steps, Popover } from '@abiz/rc-miccn';

const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

export default () => {
  return (
    <ConfigProvider>
      <Steps current={1} progressDot={customDot}>
        <Step title="Finished" description="You can hover on the dot." />
        <Step title="In Progress" description="You can hover on the dot." />
        <Step title="Waiting" description="You can hover on the dot." />
        <Step title="Waiting" description="You can hover on the dot." />
      </Steps>
    </ConfigProvider>
  );
};
```
