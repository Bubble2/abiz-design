```tsx
/**
 * title: 受控
 * desc: 受控制的页码。
 */

import React from 'react';
import { ConfigProvider, Pagination } from '@abiz/rc-aeps';

class App extends React.Component {
  state = {
    current: 3,
  };

  onChange = page => {
    console.log(page);
    this.setState({
      current: page,
    });
  };

  render() {
    return (
      <Pagination
        current={this.state.current}
        onChange={this.onChange}
        total={50}
      />
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
