---
order: 13
---

```tsx
/**
 * title: 带有进度的步骤
 * desc: 带有进度的步骤。
 */

import React from 'react';
import { ConfigProvider, Steps } from '@abiz/rc-miccn';

const { Step } = Steps;

export default () => {
  return (
    <ConfigProvider>
      <Steps current={1} percent={60}>
        <Step title="Finished" description="This is a description." />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </ConfigProvider>
  );
};
```
