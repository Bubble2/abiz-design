```tsx
/**
 * title: 幽灵按钮
 * desc: 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。
 */

import React from 'react';
import { ConfigProvider, Button } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <div className="site-button-ghost-wrapper">
        <Button type="primary" ghost>
          Primary
        </Button>
        <Button ghost>Default</Button>
        <Button type="dashed" ghost>
          Dashed
        </Button>
      </div>
    </ConfigProvider>
  );
};
```

```css
.site-button-ghost-wrapper {
  padding: 26px 16px 16px;
  background: rgb(190, 200, 200);
}
```
