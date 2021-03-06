---
order: 7.1
---

```tsx
/**
 * title: 只上传 png 图片
 * desc: <span></span>`beforeUpload`返回`false`或`Promise.reject`时，只用于拦截上传行为，不会阻止文件进入上传列表（[原因](https://github.com/ant-design/ant-design/issues/15561#issuecomment-475108235)）。如果需要阻止列表展现，可以参照此例配合`onChange`进行实现。
 */

import React, { useState } from 'react';
import { ConfigProvider, Upload, Button, message } from '@abiz/rc-aeps';
import { UploadOutlined } from '@abiz/icons-aeps';

const Uploader = () => {
  const [fileList, updateFileList] = useState([]);
  const props = {
    fileList,
    beforeUpload: file => {
      if (file.type !== 'image/png') {
        message.error(`${file.name} is not a png file`);
      }
      return file.type === 'image/png';
    },
    onChange: info => {
      console.log(info.fileList);
      // file.status is empty when beforeUpload return false
      updateFileList(info.fileList.filter(file => !!file.status));
    },
  };
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Upload png only</Button>
    </Upload>
  );
};

export default () => {
  return (
    <ConfigProvider>
      <Uploader />
    </ConfigProvider>
  );
};
```
