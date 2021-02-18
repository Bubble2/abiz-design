```tsx
/**
 * title: Steps 嵌套 Steps
 * desc: 测试 Steps 嵌套 Steps 的样式。
 */

import React, { useState } from 'react';
import { ConfigProvider, Steps, Radio, Card } from '@abiz/rc-miccn';

const { Step } = Steps;

const App = () => {
  const [size, setSize] = useState('default');
  const horizontalSteps = (
    <Card>
      <Steps size={size}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </Card>
  );
  return (
    <>
      <Radio.Group
        style={{ marginBottom: 16 }}
        value={size}
        onChange={e => setSize(e.target.value)}
      >
        <Radio value="small">Small</Radio>
        <Radio value="default">Default</Radio>
      </Radio.Group>
      <Steps size={size} direction="vertical">
        <Step title="Finished" description={horizontalSteps} />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </>
  );
};

export default () => {
  return (
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
};
```
