---
order: 2
---

```tsx
/**
 * title: 文本与超链接组件
 * desc: 内置不同样式的文本以及超链接组件。
 */

import React from 'react';
import { ConfigProvider, Typography, Space } from '@abiz/rc-aeps';

const { Text, Link } = Typography;

export default () => {
  return (
    <ConfigProvider>
      <Space direction="vertical">
        <Text>Ant Design (default)</Text>
        <Text type="secondary">Ant Design (secondary)</Text>
        <Text type="success">Ant Design (success)</Text>
        <Text type="warning">Ant Design (warning)</Text>
        <Text type="danger">Ant Design (danger)</Text>
        <Text disabled>Ant Design (disabled)</Text>
        <Text mark>Ant Design (mark)</Text>
        <Text code>Ant Design (code)</Text>
        <Text keyboard>Ant Design (keyboard)</Text>
        <Text underline>Ant Design (underline)</Text>
        <Text delete>Ant Design (delete)</Text>
        <Text strong>Ant Design (strong)</Text>
        <Link href="https://ant.design" target="_blank">
          Ant Design (Link)
        </Link>
      </Space>
    </ConfigProvider>
  );
};
```
