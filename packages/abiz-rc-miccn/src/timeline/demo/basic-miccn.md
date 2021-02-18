```tsx
/**
 * title: 基本用法
 * desc: 基本的时间轴。
 */

import React from 'react';
import { ConfigProvider, Timeline } from '@abiz/rc-miccn';

export default () => {
  return (
    <ConfigProvider>
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </ConfigProvider>
  );
};
```
