```tsx
/**
 * title: 竖直方向的步骤条
 * desc: 简单的竖直方向的步骤条。
 */

import React from 'react';
import { ConfigProvider, Steps } from '@abiz/rc-aeps';

const { Step } = Steps;

export default () => {
  return (
    <ConfigProvider>
      <Steps direction="vertical" current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </ConfigProvider>
  );
};
```
