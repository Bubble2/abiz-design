```tsx
/**
 * title: 类型
 * desc: 支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。
 */

import React from 'react';
import { ConfigProvider, Avatar, Image } from '@abiz/rc-aeps';
import { UserOutlined } from '@ant-design/icons';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Avatar icon={<UserOutlined />} />
        <Avatar>U</Avatar>
        <Avatar size={40}>USER</Avatar>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar
          src={
            <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
        />
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
          U
        </Avatar>
        <Avatar
          style={{ backgroundColor: '#87d068' }}
          icon={<UserOutlined />}
        />
      </>
    </ConfigProvider>
  );
};
```
