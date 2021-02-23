---
order: 5
---

```tsx
/**
 * title: 延迟
 * desc: 延迟显示loading效果。当spinning状态在`delay`时间内结束，则不显示loading状态。
 */

import React from 'react';
import { ConfigProvider, Spin, Alert, Switch } from '@abiz/rc-miccn';

class Card extends React.Component {
  state = { loading: false };

  toggle = value => {
    this.setState({ loading: value });
  };

  render() {
    const container = (
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    );
    return (
      <div>
        <Spin spinning={this.state.loading} delay={500}>
          {container}
        </Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：
          <Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </div>
    );
  }
}

export default () => {
  return (
    <ConfigProvider>
      <Card />
    </ConfigProvider>
  );
};
```
