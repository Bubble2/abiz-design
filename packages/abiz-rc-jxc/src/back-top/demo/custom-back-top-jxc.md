---
order: 1
---

```tsx
/**
 * title: 自定义样式
 * desc: 可以自定义回到顶部按钮的样式，限制宽高：`40px * 40px`。
 */

import React from 'react';
import { ConfigProvider, BackTop } from '@abiz/rc-jxc';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

export default () => {
  return (
    <ConfigProvider>
      <div style={{ height: '600vh', padding: 8 }}>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <BackTop>
          <div style={style}>UP</div>
        </BackTop>
      </div>
    </ConfigProvider>
  );
};
```
