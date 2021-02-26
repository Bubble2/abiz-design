---
order: 99
---

```tsx
/**
 * title: 前缀
 * desc: 修改组件和图标前缀。
 */

import React from 'react';
import { ConfigProvider, Select } from '@abiz/rc-miccn';
import { SmileOutlined } from '@abiz/icons-miccn';

// Ant Design site use `es` module for view
// but do not replace related lib `lib` with `es`
// which do not show correct in site.
// We may need do convert in site also.
const FormSizeDemo = () => (
  <ConfigProvider prefixCls="light" iconPrefixCls="bamboo">
    <SmileOutlined />
    <Select />
  </ConfigProvider>
);

export default () => {
  return (
    <ConfigProvider>
      <FormSizeDemo />
    </ConfigProvider>
  );
};
```
