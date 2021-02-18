```tsx
/**
 * title: 固定状态改变的回调
 * desc: 可以获得是否固定的状态。
 */

import React from 'react';
import { ConfigProvider, Affix, Button } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>
    </ConfigProvider>
  );
};
```
