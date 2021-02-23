---
order: 6
---

```tsx
/**
 * title: 文件夹上传
 * desc: 支持上传一个文件夹里的所有文件。
 */

import React from 'react';
import { ConfigProvider, Upload, Button } from '@abiz/rc-miccn';
import { UploadOutlined } from '@abiz/icons-miccn';

export default () => {
  return (
    <ConfigProvider>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        directory
      >
        <Button icon={<UploadOutlined />}>Upload Directory</Button>
      </Upload>
    </ConfigProvider>
  );
};
```
