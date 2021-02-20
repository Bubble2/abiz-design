---
order: 4
---

```tsx
/**
 * title: 使用 iconfont.cn 的多个资源
 * desc: <span></span>`@ant-design/icons@4.1.0` 以后，`scriptUrl` 可引用多个资源，用户可灵活的管理 [iconfont.cn](http://iconfont.cn/) 图标。如果资源的图标出现重名，会按照数组顺序进行覆盖。
 */

import React from 'react';
import { createFromIconfontCN } from '@abiz/icons-aeps';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

export default () => {
  return (
    <ConfigProvider>
      <div className="icons-list">
        <IconFont type="icon-javascript" />
        <IconFont type="icon-java" />
        <IconFont type="icon-shoppingcart" />
        <IconFont type="icon-python" />
      </div>
    </ConfigProvider>
  );
};
```
