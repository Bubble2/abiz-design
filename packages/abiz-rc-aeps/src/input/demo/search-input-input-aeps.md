---
order: 4
---

```tsx
/**
 * title: 搜索框
 * desc: 带有搜索按钮的输入框。
 */

import React from 'react';
import { ConfigProvider, Input } from '@abiz/rc-aeps';
import { AudioOutlined } from '@abiz/icons-aeps';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);

export default () => {
  return (
    <ConfigProvider>
      <>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{ width: 200, margin: '0 10px' }}
        />
        <br />
        <br />
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
        <br />
        <br />
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        <br />
        <br />
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        />
      </>
    </ConfigProvider>
  );
};
```
