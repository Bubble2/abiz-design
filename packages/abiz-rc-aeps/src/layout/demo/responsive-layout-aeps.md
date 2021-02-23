---
order: 5
---

```tsx
/**
 * title: 响应式布局
 * desc: Layout.Sider支持响应式布局。>说明：配置`breakpoint`属性即生效，视窗宽度小于`breakpoint`时Sider缩小为`collapsedWidth`宽度，若将`collapsedWidth`设置为0，会出现特殊trigger。
 */

import React from 'react';
import { ConfigProvider, Layout, Menu } from '@abiz/rc-aeps';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@abiz/icons-aeps';

const { Header, Content, Footer, Sider } = Layout;

export default () => {
  return (
    <ConfigProvider>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              nav 4
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
```

```css
#components-layout-demo-responsive .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.2);
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}
```
