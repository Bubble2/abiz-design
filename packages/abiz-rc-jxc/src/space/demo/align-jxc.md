```tsx
/**
 * title: 对齐
 * desc: 设置对齐模式。
 */

import React from 'react';
import { ConfigProvider, Space, Button } from '@abiz/rc-jxc';

export default () => {
  return (
    <ConfigProvider>
      <div className="space-align-container">
        <div className="space-align-block">
          <Space align="center">
            center
            <Button type="primary">Primary</Button>
            <span className="mock-block">Block</span>
          </Space>
        </div>
        <div className="space-align-block">
          <Space align="start">
            start
            <Button type="primary">Primary</Button>
            <span className="mock-block">Block</span>
          </Space>
        </div>
        <div className="space-align-block">
          <Space align="end">
            end
            <Button type="primary">Primary</Button>
            <span className="mock-block">Block</span>
          </Space>
        </div>
        <div className="space-align-block">
          <Space align="baseline">
            baseline
            <Button type="primary">Primary</Button>
            <span className="mock-block">Block</span>
          </Space>
        </div>
      </div>
    </ConfigProvider>
  );
};
```

```css
.space-align-container {
  display: flex;
  flex-wrap: wrap;
  align-item: flex-start;
}
.space-align-block {
  flex: none;
  margin: 8px 4px;
  padding: 4px;
  border: 1px solid #40a9ff;
}
.space-align-block .mock-block {
  display: inline-block;
  padding: 32px 8px 16px;
  background: rgba(150, 150, 150, 0.2);
}
```
