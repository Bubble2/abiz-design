---
order: 3
---

```tsx
/**
 * title: 渐显
 * desc: 切换效果为渐显。
 */

import React from 'react';
import { ConfigProvider, Carousel } from '@abiz/rc-miccn';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default () => {
  return (
    <ConfigProvider>
      <Carousel effect="fade">
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </ConfigProvider>
  );
};
```
