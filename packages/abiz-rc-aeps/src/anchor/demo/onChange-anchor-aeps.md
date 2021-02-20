---
order: 6
---

```tsx
/**
 * title: 监听锚点链接改变
 * desc: 监听锚点链接改变
 */

import React from 'react';
import { ConfigProvider, Anchor } from '@abiz/rc-aeps';

const { Link } = Anchor;

const onChange = (link: string) => {
  console.log('Anchor:OnChange', link);
};

export default () => {
  return (
    <ConfigProvider>
      <Anchor affix={false} onChange={onChange}>
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
