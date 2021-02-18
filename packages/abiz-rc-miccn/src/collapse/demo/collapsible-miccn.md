```tsx
/**
 * title: 可折叠触发区域
 * desc: 通过 `collapsible` 属性，可以设置面板的可折叠触发区域。
 */

import React from 'react';
import { ConfigProvider, Collapse, Space } from '@abiz/rc-miccn';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default () => {
  return (
    <ConfigProvider>
      <Space direction="vertical">
        <Collapse collapsible="header" defaultActiveKey={['1']}>
          <Panel
            header="This panel can only be collapsed by clicking text"
            key="1"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Collapse collapsible="disabled">
          <Panel header="This panel can't be collapsed" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Space>
    </ConfigProvider>
  );
};
```
