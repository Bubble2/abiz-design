---
order: 4
---

```tsx
/**
 * title: 垂直
 * desc: 垂直的列表。
 */

import React from 'react';
import { ConfigProvider, Descriptions } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Descriptions title="User Info" layout="vertical">
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Address" span={2}>
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
      </Descriptions>
    </ConfigProvider>
  );
};
```
