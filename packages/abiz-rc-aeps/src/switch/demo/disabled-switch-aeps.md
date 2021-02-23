---
order: 1
---

```tsx
/**
 * title: 不可用
 * desc: Switch失效状态。
 */

import React from 'react';
import { ConfigProvider, Switch, Button } from '@abiz/rc-aeps';

const App = () => {
  const [disabled, setDisabled] = React.useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Switch disabled={disabled} defaultChecked />
      <br />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </>
  );
};

export default () => {
  return (
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
};
```
