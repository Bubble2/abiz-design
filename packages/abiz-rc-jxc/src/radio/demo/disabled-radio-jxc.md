---
order: 1
---

```tsx
/**
 * title: 不可用
 * desc: Radio不可用。
 */

import React from 'react';
import { ConfigProvider, Radio, Button } from '@abiz/rc-jxc';

class App extends React.Component {
  state = {
    disabled: true,
  };

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <>
        <Radio defaultChecked={false} disabled={this.state.disabled}>
          Disabled
        </Radio>
        <Radio defaultChecked disabled={this.state.disabled}>
          Disabled
        </Radio>
        <br />
        <Button
          type="primary"
          onClick={this.toggleDisabled}
          style={{ marginTop: 16 }}
        >
          Toggle disabled
        </Button>
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
