---
order: 999
---

```tsx
/**
 * title: 自定义 label & wrapper 样式
 * desc: 自定义label&wrapper样式
 */

import React from 'react';
import { ConfigProvider, Descriptions, Divider } from '@abiz/rc-aeps';

const labelStyle: React.CSSProperties = { background: 'red' };
const contentStyle: React.CSSProperties = { background: 'green' };

function renderCelledDesc(bordered?: boolean) {
  return (
    <Descriptions title="User Info" bordered={bordered}>
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
  );
}

function renderRootDesc(bordered?: boolean) {
  return (
    <Descriptions
      title="Root style"
      labelStyle={labelStyle}
      contentStyle={contentStyle}
      bordered={bordered}
    >
      <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
      <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
      <Descriptions.Item
        label="Automatic Renewal"
        labelStyle={{ color: 'orange' }}
        contentStyle={{ color: 'blue' }}
      >
        YES
      </Descriptions.Item>
    </Descriptions>
  );
}

export default () => {
  return (
    <ConfigProvider>
      <>
        {renderCelledDesc()}
        {renderCelledDesc(true)}

        <Divider />

        {renderRootDesc()}
        {renderRootDesc(true)}
      </>
    </ConfigProvider>
  );
};
```
