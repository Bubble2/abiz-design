```tsx
/**
 * title: 带图标的步骤条
 * desc: 通过设置 `Steps.Step` 的 `icon` 属性，可以启用自定义图标。
 */

import React from 'react';
import { ConfigProvider, Steps } from '@abiz/rc-aeps';
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from '@ant-design/icons';

const { Step } = Steps;

export default () => {
  return (
    <ConfigProvider>
      <Steps>
        <Step status="finish" title="Login" icon={<UserOutlined />} />
        <Step
          status="finish"
          title="Verification"
          icon={<SolutionOutlined />}
        />
        <Step status="process" title="Pay" icon={<LoadingOutlined />} />
        <Step status="wait" title="Done" icon={<SmileOutlined />} />
      </Steps>
    </ConfigProvider>
  );
};
```
