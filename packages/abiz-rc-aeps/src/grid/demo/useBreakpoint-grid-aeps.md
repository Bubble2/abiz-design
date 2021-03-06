---
order: 10
---

```tsx
/**
 * title: null
 * desc: 使用`useBreakpoint`Hook个性化布局。
 */

import React from 'react';
import { ConfigProvider, Grid, Tag } from '@abiz/rc-aeps';

const { useBreakpoint } = Grid;

function UseBreakpointDemo() {
  const screens = useBreakpoint();
  return (
    <>
      Current break point:{' '}
      {Object.entries(screens)
        .filter(screen => !!screen[1])
        .map(screen => (
          <Tag color="blue" key={screen[0]}>
            {screen[0]}
          </Tag>
        ))}
    </>
  );
}

export default () => {
  return (
    <ConfigProvider>
      <UseBreakpointDemo />
    </ConfigProvider>
  );
};
```
