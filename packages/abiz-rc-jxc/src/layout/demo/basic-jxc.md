```tsx
/**
 * title: 基本结构
 * desc: 典型的页面布局。
 */

import React from 'react';
import { ConfigProvider, Layout } from '@abiz/rc-jxc';

const { Header, Footer, Sider, Content } = Layout;

export default () => {
  return (
    <ConfigProvider>
      <>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>

        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>

        <Layout>
          <Header>Header</Header>
          <Layout>
            <Content>Content</Content>
            <Sider>Sider</Sider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>

        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </>
    </ConfigProvider>
  );
};
```
