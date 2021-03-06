---
order: 2
---

```tsx
/**
 * title: 最后一个及排序
 * desc: 当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点，当pending为真值时展示幽灵节点，如果pending是React元素可用于定制该节点内容，同时pendingDot将可以用于定制其轴点。reverse属性用于控制节点排序，为false时按正序排列，为true时按倒序排列。
 */

import React from 'react';
import { ConfigProvider, Timeline, Button } from '@abiz/rc-jxc';

class PendingTimeLine extends React.Component {
  state = {
    reverse: false,
  };

  handleClick = () => {
    this.setState({ reverse: !this.state.reverse });
  };

  render() {
    return (
      <div>
        <Timeline pending="Recording..." reverse={this.state.reverse}>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>
            Solve initial network problems 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        </Timeline>
        <Button
          type="primary"
          style={{ marginTop: 16 }}
          onClick={this.handleClick}
        >
          Toggle Reverse
        </Button>
      </div>
    );
  }
}

export default () => {
  return (
    <ConfigProvider>
      <PendingTimeLine />
    </ConfigProvider>
  );
};
```
