```tsx
/**
 * title: 竖直方向的小型步骤条
 * desc: 简单的竖直方向的小型步骤条。
 */

import React from 'react';
import { ConfigProvider, Steps } from '@abiz/rc-miccn';

const { Step } = Steps;

export default () => {
  return (
    <ConfigProvider>
      <Steps direction="vertical" size="small" current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </ConfigProvider>
  );
};
```
