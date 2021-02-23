---
order: 3
---

```tsx
/**
 * title: 使用 iconfont.cn
 * desc: 对于使用[iconfont.cn](http://iconfont.cn/)的用户，通过设置`createFromIconfontCN`方法参数对象中的`scriptUrl`字段，即可轻松地使用已有项目中的图标。
 */

import React from 'react';
import { ConfigProvider } from '@abiz/rc-miccn';
import { createFromIconfontCN } from '@abiz/icons-miccn';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

export default () => {
  return (
    <ConfigProvider>
      <div className="icons-list">
        <IconFont type="icon-tuichu" />
        <IconFont type="icon-facebook" />
        <IconFont type="icon-twitter" />
      </div>
    </ConfigProvider>
  );
};
```
