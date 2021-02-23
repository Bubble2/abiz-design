---
order: 1
---

```tsx
/**
 * title: 图标按钮
 * desc: 当需要在`Button`内嵌入`Icon`时，可以设置`icon`属性，或者直接在`Button`内使用`Icon`组件。如果想控制`Icon`具体的位置，只能直接使用`Icon`组件，而非`icon`属性。
 */

import React from 'react';
import { ConfigProvider, Button, Tooltip } from '@abiz/rc-jxc';
import { SearchOutlined } from '@abiz/icons-jxc';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="primary" shape="circle">
          A
        </Button>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
        <br />
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
        <Tooltip title="search">
          <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="dashed" icon={<SearchOutlined />}>
          Search
        </Button>
      </>
    </ConfigProvider>
  );
};
```
