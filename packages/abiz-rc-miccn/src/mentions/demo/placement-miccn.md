```tsx
/**
 * title: 向上展开
 * desc: 向上展开建议。
 */

import React from 'react';
import { ConfigProvider, Mentions } from '@abiz/rc-miccn';

const { Option } = Mentions;

export default () => {
  return (
    <ConfigProvider>
      <Mentions style={{ width: '100%' }} placement="top">
        <Option value="afc163">afc163</Option>
        <Option value="zombieJ">zombieJ</Option>
        <Option value="yesmeck">yesmeck</Option>
      </Mentions>
    </ConfigProvider>
  );
};
```
