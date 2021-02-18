```tsx
/**
 * title: 自定义页签头
 * desc: 使用 react-sticky 组件实现吸顶效果。
 */

import React from 'react';
import { ConfigProvider, Tabs } from '@abiz/rc-miccn';
import { StickyContainer, Sticky } from 'react-sticky';

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        className="site-custom-tab-bar"
        style={{ ...style }}
      />
    )}
  </Sticky>
);

export default () => {
  return (
    <ConfigProvider>
      <StickyContainer>
        <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
          <TabPane tab="Tab 1" key="1" style={{ height: 200 }}>
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </StickyContainer>
    </ConfigProvider>
  );
};
```

```css
.site-custom-tab-bar {
  z-index: 1;
  background: #fff;
}
```
