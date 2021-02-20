---
order: 0
---

```tsx
/**
 * title: 基本用法
 * desc: 相邻组件水平间距。
 */

import React from 'react';
import {
  ConfigProvider,
  Button,
  Space,
  Upload,
  Popconfirm,
} from '@abiz/rc-miccn';
import { UploadOutlined } from '@abiz/icons-miccn';

function SpaceDemo() {
  return (
    <Space>
      Space
      <Button type="primary">Button</Button>
      <Upload>
        <Button>
          <UploadOutlined /> Click to Upload
        </Button>
      </Upload>
      <Popconfirm
        title="Are you sure delete this task?"
        okText="Yes"
        cancelText="No"
      >
        <Button>Confirm</Button>
      </Popconfirm>
    </Space>
  );
}

export default () => {
  return (
    <ConfigProvider>
      <SpaceDemo />
    </ConfigProvider>
  );
};
```
