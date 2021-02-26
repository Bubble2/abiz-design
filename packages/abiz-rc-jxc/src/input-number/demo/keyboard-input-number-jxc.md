---
order: 5
---

```tsx
/**
 * title: 键盘行为
 * desc: 使用`keyboard`属性可以控制键盘行为。
 */

import React from 'react';
import { ConfigProvider, InputNumber, Button } from '@abiz/rc-jxc';

class App extends React.Component {
  state = {
    keyboard: true,
  };

  toggle = () => {
    this.setState({
      keyboard: !this.state.keyboard,
    });
  };

  render() {
    return (
      <>
        <InputNumber
          min={1}
          max={10}
          keyboard={this.state.keyboard}
          defaultValue={3}
        />
        <div style={{ marginTop: 20 }}>
          <Button onClick={this.toggle} type="primary">
            Toggle keyboard
          </Button>
        </div>
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
