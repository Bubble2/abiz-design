---
order: 5
---

```tsx
/**
 * title: 控制关闭状态
 * desc: 通过 `visible` 属性控制关闭状态。
 */

import React from 'react';
import { ConfigProvider, Tag, Button } from '@abiz/rc-miccn';

class Demo extends React.Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <>
        <Tag
          closable
          visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}
        >
          Movies
        </Tag>
        <br />
        <Button
          size="small"
          onClick={() => this.setState({ visible: !this.state.visible })}
        >
          Toggle
        </Button>
      </>
    );
  }
}

export default () => {
  return (
    <ConfigProvider>
      <Demo />
    </ConfigProvider>
  );
};
```
