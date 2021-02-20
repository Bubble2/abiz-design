---
order: 2
---

```tsx
/**
 * title: 图标
 * desc: 有图标的标签。
 */

import React from 'react';
import { ConfigProvider, Tabs } from '@abiz/rc-miccn';
import { AppleOutlined, AndroidOutlined } from '@abiz/icons-miccn';

const { TabPane } = Tabs;

export default () => {
  return (
    <ConfigProvider>
      <Tabs defaultActiveKey="2">
        <TabPane
          tab={
            <span>
              <AppleOutlined />
              Tab 1
            </span>
          }
          key="1"
        >
          Tab 1
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              Tab 2
            </span>
          }
          key="2"
        >
          Tab 2
        </TabPane>
      </Tabs>
    </ConfigProvider>
  );
};
```
