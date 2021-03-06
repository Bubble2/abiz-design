---
order: 9
---

```tsx
/**
 * title: 自定义预览
 * desc: 自定义本地预览，用于处理非图片格式文件（例如视频文件）。
 */

import React from 'react';
import { ConfigProvider, Upload, Button } from '@abiz/rc-jxc';
import { UploadOutlined } from '@abiz/icons-jxc';

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then(res => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

export default () => {
  return (
    <ConfigProvider>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    </ConfigProvider>
  );
};
```
