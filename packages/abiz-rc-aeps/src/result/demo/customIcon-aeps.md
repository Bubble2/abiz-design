```tsx
/**
 * title: 自定义 icon
 * desc: 自定义 icon。
 */

import React from 'react';
import { ConfigProvider, Result, Button } from '@abiz/rc-aeps';
import { SmileOutlined } from '@ant-design/icons';

export default () => {
  return (
    <ConfigProvider>
      <Result
        icon={<SmileOutlined />}
        title="Great, we have done all the operations!"
        extra={<Button type="primary">Next</Button>}
      />
    </ConfigProvider>
  );
};
```
