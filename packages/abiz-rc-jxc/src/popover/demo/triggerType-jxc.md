```tsx
/**
 * title: 三种触发方式
 * desc: 鼠标移入、聚集、点击。
 */

import React from 'react';
import { ConfigProvider, Popover, Button } from '@abiz/rc-jxc';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default () => {
  return (
    <ConfigProvider>
      <div>
        <Popover content={content} title="Title" trigger="hover">
          <Button>Hover me</Button>
        </Popover>
        <Popover content={content} title="Title" trigger="focus">
          <Button>Focus me</Button>
        </Popover>
        <Popover content={content} title="Title" trigger="click">
          <Button>Click me</Button>
        </Popover>
      </div>
    </ConfigProvider>
  );
};
```
