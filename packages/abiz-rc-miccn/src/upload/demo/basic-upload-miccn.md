---
order: 0
---

```tsx
/**
 * title: 点击上传
 * desc: 经典款式，用户点击按钮弹出文件选择框。
 */

import React from 'react';
import { ConfigProvider, Upload, message, Button } from '@abiz/rc-miccn';
import { UploadOutlined } from '@abiz/icons-miccn';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default () => {
  return (
    <ConfigProvider>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </ConfigProvider>
  );
};
```
