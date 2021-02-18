```tsx
/**
 * title: 静态位置
 * desc: 不浮动，状态不随页面滚动变化。
 */

import React from 'react';
import { ConfigProvider, Anchor } from '@abiz/rc-aeps';

const { Link } = Anchor;

export default () => {
  return (
    <ConfigProvider>
      <Anchor affix={false}>
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
