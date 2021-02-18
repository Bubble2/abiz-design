```tsx
/**
 * title: 自定义选择标签
 * desc: 允许自定义选择标签的样式。
 */

import React from 'react';
import { ConfigProvider, Select, Tag } from '@abiz/rc-aeps';

const options = [
  { value: 'gold' },
  { value: 'lime' },
  { value: 'green' },
  { value: 'cyan' },
];

function tagRender(props) {
  const { label, value, closable, onClose } = props;

  return (
    <Tag
      color={value}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}

export default () => {
  return (
    <ConfigProvider>
      <Select
        mode="multiple"
        showArrow
        tagRender={tagRender}
        defaultValue={['gold', 'cyan']}
        style={{ width: '100%' }}
        options={options}
      />
    </ConfigProvider>
  );
};
```
