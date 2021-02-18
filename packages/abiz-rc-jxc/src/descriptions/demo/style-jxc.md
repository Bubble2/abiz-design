```tsx
/**
 * title: 自定义 label & wrapper 样式
 * desc: 自定义 label & wrapper 样式
 */

import React from 'react';
import { ConfigProvider, Descriptions } from '@abiz/rc-jxc';

const labelStyle: React.CSSProperties = { background: 'red' };
const contentStyle: React.CSSProperties = { background: 'green' };

export default () => {
  return (
    <ConfigProvider>
      <>
        <Descriptions title="User Info">
          <Descriptions.Item
            label="Product"
            labelStyle={labelStyle}
            contentStyle={contentStyle}
          >
            Cloud Database
          </Descriptions.Item>
          <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
          <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
        </Descriptions>

        <Descriptions title="User Info" bordered>
          <Descriptions.Item
            label="Product"
            labelStyle={labelStyle}
            contentStyle={contentStyle}
          >
            Cloud Database
          </Descriptions.Item>
          <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
          <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
        </Descriptions>
      </>
    </ConfigProvider>
  );
};
```
