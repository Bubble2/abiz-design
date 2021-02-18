```tsx
/**
 * title: 标准样式
 * desc: 标准页头，适合使用在需要简单描述的场景。
 */

import React from 'react';
import { ConfigProvider, PageHeader } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
    </ConfigProvider>
  );
};
```

```css
.site-page-header {
  border: 1px solid rgb(235, 237, 240);
}
```
