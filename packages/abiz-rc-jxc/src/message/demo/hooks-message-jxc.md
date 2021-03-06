---
order: 10
---

```tsx
/**
 * title: 通过 Hooks 获取上下文（4.5.0+）
 * desc: 通过`message.useMessage`创建支持读取context的`contextHolder`。
 */

import React from 'react';
import { ConfigProvider, message, Button } from '@abiz/rc-jxc';

const Context = React.createContext({ name: 'Default' });

function Demo() {
  const [messsageApi, contextHolder] = message.useMessage();
  const info = () => {
    messsageApi.open({
      type: 'info',
      content: (
        <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>
      ),
      duration: 1,
    });
  };

  return (
    <Context.Provider value={{ name: 'Ant Design' }}>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </Context.Provider>
  );
}

export default () => {
  return (
    <ConfigProvider>
      <Demo />
    </ConfigProvider>
  );
};
```
