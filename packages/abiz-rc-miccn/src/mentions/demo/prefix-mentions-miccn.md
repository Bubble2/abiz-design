---
order: 3
---

```tsx
/**
 * title: 自定义触发字符
 * desc: 通过`prefix`属性自定义触发字符。默认为`@`,可以定义为数组。
 */

import React from 'react';
import { ConfigProvider, Mentions } from '@abiz/rc-miccn';

const { Option } = Mentions;

const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};

class App extends React.Component {
  state = {
    prefix: '@',
  };

  onSearch = (_, prefix) => {
    this.setState({ prefix });
  };

  render() {
    const { prefix } = this.state;

    return (
      <Mentions
        style={{ width: '100%' }}
        placeholder="input @ to mention people, # to mention tag"
        prefix={['@', '#']}
        onSearch={this.onSearch}
      >
        {(MOCK_DATA[prefix] || []).map(value => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </Mentions>
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
