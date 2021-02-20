---
order: 6
---

```tsx
/**
 * title: 自定义字符
 * desc: 可以使用 `(RateProps) => ReactNode` 的方式自定义每一个字符。
 */

import React from 'react';
import { ConfigProvider, Rate } from '@abiz/rc-aeps';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@abiz/icons-aeps';

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

export default () => {
  return (
    <ConfigProvider>
      <>
        <Rate defaultValue={2} character={({ index }) => index + 1} />
        <br />
        <Rate
          defaultValue={3}
          character={({ index }) => customIcons[index + 1]}
        />
      </>
    </ConfigProvider>
  );
};
```
