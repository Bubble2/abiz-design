---
order: 10
---

```tsx
/**
 * title: 限制数量
 * desc: 通过`maxCount`限制上传数量。当为`1`时，始终用最新上传的代替当前。
 */

import React from 'react';
import { ConfigProvider, Upload, Button, Space } from '@abiz/rc-miccn';
import { UploadOutlined } from '@abiz/icons-miccn';

export default () => {
  return (
    <ConfigProvider>
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
        </Upload>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          maxCount={3}
          multiple
        >
          <Button icon={<UploadOutlined />}>Upload (Max: 3)</Button>
        </Upload>
      </Space>
    </ConfigProvider>
  );
};
```
