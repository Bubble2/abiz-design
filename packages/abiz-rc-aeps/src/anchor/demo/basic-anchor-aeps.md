---
order: 0
---

```tsx
/**
 * title: 基本
 * desc: 最简单的用法。
 */

import React from 'react';
import { ConfigProvider, Anchor } from '@abiz/rc-aeps';

const { Link } = Anchor;

export default () => {
  return (
    <ConfigProvider>
      <Anchor>
        <Link href="#components-anchor-demo-basic" title="Basic demo" />
        <Link href="#components-anchor-demo-static" title="Static demo" />
        <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link>
      </Anchor>
    </ConfigProvider>
  );
};
```
