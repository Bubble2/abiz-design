---
order: 12
---

```tsx
/**
 * title: 使用 hooks 获得上下文
 * desc: 通过`Modal.useModal`创建支持读取context的`contextHolder`。
 */

import React from 'react';
import { ConfigProvider, Modal, Button, Space } from '@abiz/rc-miccn';

const ReachableContext = React.createContext();
const UnreachableContext = React.createContext();

const config = {
  title: 'Use Hook!',
  content: (
    <>
      <ReachableContext.Consumer>
        {name => `Reachable: ${name}!`}
      </ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>
        {name => `Unreachable: ${name}!`}
      </UnreachableContext.Consumer>
    </>
  ),
};

const App = () => {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <ReachableContext.Provider value="Light">
      <Space>
        <Button
          onClick={() => {
            modal.confirm(config);
          }}
        >
          Confirm
        </Button>
        <Button
          onClick={() => {
            modal.warning(config);
          }}
        >
          Warning
        </Button>
        <Button
          onClick={() => {
            modal.info(config);
          }}
        >
          Info
        </Button>
        <Button
          onClick={() => {
            modal.error(config);
          }}
        >
          Error
        </Button>
      </Space>
      {/* `contextHolder` should always under the context you want to access */}
      {contextHolder}

      {/* Can not access this context since `contextHolder` is not in it */}
      <UnreachableContext.Provider value="Bamboo" />
    </ReachableContext.Provider>
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
