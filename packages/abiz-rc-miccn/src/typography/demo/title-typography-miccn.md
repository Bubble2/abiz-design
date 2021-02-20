---
order: 1
---

```tsx
/**
 * title: 标题组件
 * desc: 展示不同级别的标题。
 */

import React from 'react';
import { ConfigProvider, Typography } from '@abiz/rc-miccn';

const { Title } = Typography;

export default () => {
  return (
    <ConfigProvider>
      <>
        <Title>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Title level={3}>h3. Ant Design</Title>
        <Title level={4}>h4. Ant Design</Title>
        <Title level={5}>h5. Ant Design</Title>
      </>
    </ConfigProvider>
  );
};
```
