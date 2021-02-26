---
order: 99
---

```tsx
/**
 * title: 自定义预览文本
 * desc: 自定义预览文本。
 */

import React from 'react';
import { ConfigProvider, Image, Space } from '@abiz/rc-aeps';
import { ZoomInOutlined } from '@abiz/icons-aeps';

function ImageDemo() {
  return (
    <Image
      width={96}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      preview={{
        maskClassName: 'customize-mask',
        mask: (
          <Space direction="vertical" align="center">
            <ZoomInOutlined />
            示例
          </Space>
        ),
      }}
    />
  );
}

export default () => {
  return (
    <ConfigProvider>
      <ImageDemo />
    </ConfigProvider>
  );
};
```

```css
.customize-mask {
  font-size: 20px;
  opacity: 1;
}
.customize-mask .anticon {
  font-size: 32px;
}
```
