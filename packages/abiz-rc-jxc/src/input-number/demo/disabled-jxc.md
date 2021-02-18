```tsx
/**
 * title: 不可用
 * desc: 点击按钮切换可用状态。
 */

import React from 'react';
import { ConfigProvider, InputNumber, Button } from '@abiz/rc-jxc';

class App extends React.Component {
  state = {
    disabled: true,
  };

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <>
        <InputNumber
          min={1}
          max={10}
          disabled={this.state.disabled}
          defaultValue={3}
        />
        <div style={{ marginTop: 20 }}>
          <Button onClick={this.toggle} type="primary">
            Toggle disabled
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
