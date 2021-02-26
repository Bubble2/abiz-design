---
order: 1
---

```tsx
/**
 * title: 独立使用
 * desc: 不包裹任何元素即是独立使用，可自定样式展现。>在右上角的badge则限定为红色。
 */

import React from 'react';
import { ConfigProvider, Badge, Space, Switch } from '@abiz/rc-jxc';
import { ClockCircleOutlined } from '@abiz/icons-jxc';

const Demo = () => {
  const [show, setShow] = React.useState(true);

  return (
    <Space>
      <Switch
        checked={show}
        onChange={() => {
          setShow(!show);
        }}
      />
      <Badge count={show ? 25 : 0} />
      <Badge
        count={show ? <ClockCircleOutlined style={{ color: '#f5222d' }} /> : 0}
      />
      <Badge count={show ? 4 : 0} className="site-badge-count-4" />
      <Badge
        className="site-badge-count-109"
        count={show ? 109 : 0}
        style={{ backgroundColor: '#52c41a' }}
      />
    </Space>
  );
};

export default () => {
  return (
    <ConfigProvider>
      <Demo />
    </ConfigProvider>
  );
};
```

```css
.site-badge-count-4 .ant-badge-count {
  color: #999;
  background-color: #fff;
  box-shadow: 0 0 0 1px #d9d9d9 inset;
}
```
