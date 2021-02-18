```tsx
/**
 * title: 卡片模式
 * desc: 用于嵌套在空间有限的容器中。
 */

import React from 'react';
import { ConfigProvider, Calendar } from '@abiz/rc-miccn';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

export default () => {
  return (
    <ConfigProvider>
      <div className="site-calendar-demo-card">
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    </ConfigProvider>
  );
};
```

```css
.site-calendar-demo-card {
  width: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
}
```
