```tsx
/**
 * title: 自动大小
 * desc: 自适应内容高度。
 */

import React from 'react';
import { ConfigProvider, Mentions } from '@abiz/rc-miccn';

const { Option } = Mentions;

export default () => {
  return (
    <ConfigProvider>
      <Mentions autoSize style={{ width: '100%' }}>
        <Option value="afc163">afc163</Option>
        <Option value="zombieJ">zombieJ</Option>
        <Option value="yesmeck">yesmeck</Option>
      </Mentions>
    </ConfigProvider>
  );
};
```
