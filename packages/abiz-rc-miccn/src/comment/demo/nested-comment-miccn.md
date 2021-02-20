---
order: 2
---

```tsx
/**
 * title: 嵌套评论
 * desc: 评论可以嵌套。
 */

import React from 'react';
import { ConfigProvider, Comment, Avatar } from '@abiz/rc-miccn';

const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </Comment>
);

export default () => {
  return (
    <ConfigProvider>
      <ExampleComment>
        <ExampleComment>
          <ExampleComment />
          <ExampleComment />
        </ExampleComment>
      </ExampleComment>
    </ConfigProvider>
  );
};
```
