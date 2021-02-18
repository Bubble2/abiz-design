```tsx
/**
 * title: 步骤运行错误
 * desc: 使用 Steps 的 `status` 属性来指定当前步骤的状态。
 */

import React from 'react';
import { ConfigProvider, Steps } from '@abiz/rc-jxc';

const { Step } = Steps;

export default () => {
  return (
    <ConfigProvider>
      <Steps current={1} status="error">
        <Step title="Finished" description="This is a description" />
        <Step title="In Process" description="This is a description" />
        <Step title="Waiting" description="This is a description" />
      </Steps>
    </ConfigProvider>
  );
};
```
