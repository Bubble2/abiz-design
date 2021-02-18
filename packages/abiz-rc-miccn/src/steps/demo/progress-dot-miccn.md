```tsx
/**
 * title: 点状步骤条
 * desc: 包含步骤点的进度条。
 */

import React from 'react';
import { ConfigProvider, Steps, Divider } from '@abiz/rc-miccn';

const { Step } = Steps;

export default () => {
  return (
    <ConfigProvider>
      <>
        <Steps progressDot current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
        <Divider />
        <Steps progressDot current={1} direction="vertical">
          <Step
            title="Finished"
            description="This is a description. This is a description."
          />
          <Step
            title="Finished"
            description="This is a description. This is a description."
          />
          <Step
            title="In Progress"
            description="This is a description. This is a description."
          />
          <Step title="Waiting" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </>
    </ConfigProvider>
  );
};
```
