---
order: 1
---

```tsx
/**
 * title: 用户头像
 * desc: 点击上传用户头像，并使用`beforeUpload`限制用户上传的图片格式和大小。>`beforeUpload`的返回值可以是一个Promise以支持异步处理，如服务端校验等：[示例](http://react-component.github.io/upload/examples/beforeUpload.html)。
 */

import React from 'react';
import { ConfigProvider, Upload, message } from '@abiz/rc-jxc';
import { LoadingOutlined, PlusOutlined } from '@abiz/icons-jxc';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class Avatar extends React.Component {
  state = {
    loading: false,
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
    );
  }
}

export default () => {
  return (
    <ConfigProvider>
      <Avatar />
    </ConfigProvider>
  );
};
```

```css
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
```
