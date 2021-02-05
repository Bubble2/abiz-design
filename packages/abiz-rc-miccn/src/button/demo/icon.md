```jsx
/**
 * title: 图标按钮
 * desc: 当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。
 */

import React from 'react';
import {ConfigProvider, Button } from '@abiz/rc-miccn';
import { SearchOutlined } from '@abiz/icons';

export default () => {
  return (
    <ConfigProvider>
      <Button type="primary" shape="circle">
        A
      </Button>
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
      <Button type="dashed" icon={<SearchOutlined />}>
        Search
      </Button>
    </ConfigProvider>
  );
};
```