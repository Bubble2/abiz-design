---
order: 2
---

```tsx
/**
 * title: 白底模式
 * desc: 默认PageHeader是透明底色的。在某些情况下，PageHeader需要自己的背景颜色。
 */

import React from 'react';
import {
  ConfigProvider,
  PageHeader,
  Button,
  Descriptions,
} from '@abiz/rc-aeps';

export default () => {
  return (
    <ConfigProvider>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="Title"
          subTitle="This is a subtitle"
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary
            </Button>,
          ]}
        >
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
            <Descriptions.Item label="Association">
              <a>421421</a>
            </Descriptions.Item>
            <Descriptions.Item label="Creation Time">
              2017-01-10
            </Descriptions.Item>
            <Descriptions.Item label="Effective Time">
              2017-10-10
            </Descriptions.Item>
            <Descriptions.Item label="Remarks">
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>
    </ConfigProvider>
  );
};
```

```css
.site-page-header-ghost-wrapper {
  padding: 24px;
  background-color: #f5f5f5;
}
```
