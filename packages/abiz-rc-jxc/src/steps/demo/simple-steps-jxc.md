---
order: 0
---

```tsx
/**
 * title: 基本用法
 * desc: 简单的步骤条。
 */

import React from 'react';
import { ConfigProvider, Steps } from '@abiz/rc-jxc';

const { Step } = Steps;

export default () => {
  return (
    <ConfigProvider>
      <Steps current={1}>
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
