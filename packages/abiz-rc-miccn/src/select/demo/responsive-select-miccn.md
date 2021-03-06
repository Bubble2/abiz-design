---
order: 24
---

```tsx
/**
 * title: 响应式 maxTagCount
 * desc: 多选下通过响应式布局让选项自动收缩。该功能对性能有所消耗，不推荐在大表单场景下使用。
 */

import React from 'react';
import { ConfigProvider, Select, Space } from '@abiz/rc-miccn';

interface ItemProps {
  label: string;
  value: string;
}

const options: ItemProps[] = [];

for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: `Long Label: ${value}`,
    value,
  });
}

const Demo = () => {
  const [value, setValue] = React.useState(['a10', 'c12', 'h17', 'j19', 'k20']);

  const selectProps = {
    mode: 'multiple' as const,
    style: { width: '100%' },
    value,
    options,
    onChange: (newValue: string[]) => {
      setValue(newValue);
    },
    placeholder: 'Select Item...',
    maxTagCount: 'responsive' as const,
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Select {...selectProps} />
      <Select {...selectProps} disabled />
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
