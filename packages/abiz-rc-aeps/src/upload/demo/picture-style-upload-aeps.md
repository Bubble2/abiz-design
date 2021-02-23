---
order: 8
---

```tsx
/**
 * title: 图片列表样式
 * desc: 上传文件为图片，可展示本地缩略图。`IE8/9`不支持浏览器本地缩略图展示（[Ref](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)），可以写`thumbUrl`属性来代替。
 */

import React from 'react';
import { ConfigProvider, Upload, Button } from '@abiz/rc-aeps';
import { UploadOutlined } from '@abiz/icons-aeps';

const fileList = [
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'yyy.png',
    status: 'error',
  },
];

export default () => {
  return (
    <ConfigProvider>
      <>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          defaultFileList={[...fileList]}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
        <br />
        <br />
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          defaultFileList={[...fileList]}
          className="upload-list-inline"
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </>
    </ConfigProvider>
  );
};
```

```css
/* tile uploaded pictures */
.upload-list-inline .ant-upload-list-item {
  float: left;
  width: 200px;
  margin-right: 8px;
}

.upload-list-inline [class*='-upload-list-rtl'] .ant-upload-list-item {
  float: right;
}
```
