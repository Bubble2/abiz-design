```tsx
/**
 * title: 三种大小
 * desc: 我们为 `<Input />` 输入框定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。
 */

import React from 'react';
import { ConfigProvider, Input } from '@abiz/rc-aeps';
import { UserOutlined } from '@ant-design/icons';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Input
          size="large"
          placeholder="large size"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input placeholder="default size" prefix={<UserOutlined />} />
        <br />
        <br />
        <Input
          size="small"
          placeholder="small size"
          prefix={<UserOutlined />}
        />
      </>
    </ConfigProvider>
  );
};
```
