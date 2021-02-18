```tsx
/**
 * title: Success
 * desc: 成功的结果。
 */

import React from 'react';
import { ConfigProvider, Result, Button } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button type="primary" key="console">
            Go Console
          </Button>,
          <Button key="buy">Buy Again</Button>,
        ]}
      />
    </ConfigProvider>
  );
};
```
