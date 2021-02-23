---
order: 4
---

```tsx
/**
 * title: 进度圈动态展示
 * desc: 会动的进度条才是好进度条。
 */

import React from 'react';
import { ConfigProvider, Progress, Button } from '@abiz/rc-jxc';
import { MinusOutlined, PlusOutlined } from '@abiz/icons-jxc';

class App extends React.Component {
  state = {
    percent: 0,
  };

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };

  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };

  render() {
    return (
      <>
        <Progress type="circle" percent={this.state.percent} />
        <Button.Group>
          <Button onClick={this.decline} icon={<MinusOutlined />} />
          <Button onClick={this.increase} icon={<PlusOutlined />} />
        </Button.Group>
      </>
    );
  }
}

export default () => {
  return (
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
};
```
