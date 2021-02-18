```tsx
/**
 * title: 不可用状态
 * desc: 添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
 */

import React from 'react';
import { ConfigProvider, Button } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>
          Primary(disabled)
        </Button>
        <br />
        <Button>Default</Button>
        <Button disabled>Default(disabled)</Button>
        <br />
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>
          Dashed(disabled)
        </Button>
        <br />
        <Button type="text">Text</Button>
        <Button type="text" disabled>
          Text(disabled)
        </Button>
        <br />
        <Button type="link">Link</Button>
        <Button type="link" disabled>
          Link(disabled)
        </Button>
        <br />
        <Button danger>Danger Default</Button>
        <Button danger disabled>
          Danger Default(disabled)
        </Button>
        <br />
        <Button danger type="text">
          Danger Text
        </Button>
        <Button danger type="text" disabled>
          Danger Text(disabled)
        </Button>
        <br />
        <Button type="link" danger>
          Danger Link
        </Button>
        <Button type="link" danger disabled>
          Danger Link(disabled)
        </Button>
        <div className="site-button-ghost-wrapper">
          <Button ghost>Ghost</Button>
          <Button ghost disabled>
            Ghost(disabled)
          </Button>
        </div>
      </>
    </ConfigProvider>
  );
};
```

```css
.site-button-ghost-wrapper {
  padding: 8px 8px 0 8px;
  background: rgb(190, 200, 200);
}
```
