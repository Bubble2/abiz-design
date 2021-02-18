```tsx
/**
 * title: 自定义锚点高亮
 * desc: 自定义锚点高亮。
 */

import React from 'react';
import { ConfigProvider, Anchor } from '@abiz/rc-miccn';

const { Link } = Anchor;

const getCurrentAnchor = () => {
  return '#components-anchor-demo-static';
};

export default () => {
  return (
    <ConfigProvider>
      <Anchor affix={false} getCurrentAnchor={getCurrentAnchor}>
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
