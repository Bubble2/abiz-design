---
order: 8
---

```tsx
/**
 * title: 多彩徽标
 * desc: 我们添加了多种预设色彩的徽标样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。
 */

import React from 'react';
import { ConfigProvider, Badge, Divider } from '@abiz/rc-miccn';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

export default () => {
  return (
    <ConfigProvider>
      <>
        <Divider orientation="left">Presets</Divider>
        <div>
          {colors.map(color => (
            <div key={color}>
              <Badge color={color} text={color} />
            </div>
          ))}
        </div>
        <Divider orientation="left">Custom</Divider>
        <div>
          <Badge color="#f50" text="#f50" />
          <br />
          <Badge color="#2db7f5" text="#2db7f5" />
          <br />
          <Badge color="#87d068" text="#87d068" />
          <br />
          <Badge color="#108ee9" text="#108ee9" />
        </div>
      </>
    </ConfigProvider>
  );
};
```

```css
.ant-tag {
  margin-bottom: 8px;
}
```
