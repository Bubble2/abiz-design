---
order: 7
---

```tsx
/**
 * title: 图标按钮
 * desc: 当需要在`Tag`内嵌入`Icon`时，可以设置`icon`属性，或者直接在`Tag`内使用`Icon`组件。如果想控制`Icon`具体的位置，只能直接使用`Icon`组件，而非`icon`属性。
 */

import React from 'react';
import { ConfigProvider, Tag } from '@abiz/rc-miccn';
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from '@abiz/icons-miccn';

export default () => {
  return (
    <ConfigProvider>
      <>
        <Tag icon={<TwitterOutlined />} color="#55acee">
          Twitter
        </Tag>
        <Tag icon={<YoutubeOutlined />} color="#cd201f">
          Youtube
        </Tag>
        <Tag icon={<FacebookOutlined />} color="#3b5999">
          Facebook
        </Tag>
        <Tag icon={<LinkedinOutlined />} color="#55acee">
          LinkedIn
        </Tag>
      </>
    </ConfigProvider>
  );
};
```
