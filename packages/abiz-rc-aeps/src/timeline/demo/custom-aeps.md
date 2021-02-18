```tsx
/**
 * title: 自定义时间轴点
 * desc: 可以设置为图标或其他自定义元素。
 */

import React from 'react';
import { ConfigProvider, Timeline } from '@abiz/rc-aeps';
import { ClockCircleOutlined } from '@ant-design/icons';

export default () => {
  return (
    <ConfigProvider>
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined className="timeline-clock-icon" />}
          color="red"
        >
          Technical testing 2015-09-01
        </Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </ConfigProvider>
  );
};
```

```css
.timeline-clock-icon {
  font-size: 16px;
}

[data-theme='compact'] .timeline-clock-icon {
  font-size: 14px;
}
```
