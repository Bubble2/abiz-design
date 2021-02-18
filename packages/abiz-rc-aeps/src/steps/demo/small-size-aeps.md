```tsx
/**
 * title: 迷你版
 * desc: 迷你版的步骤条，通过设置 `<Steps size="small">` 启用.
 */

import React from 'react';
import { ConfigProvider, Steps } from '@abiz/rc-aeps';

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
