```tsx
/**
 * title: 上一步和下一步
 * desc: 修改上一步和下一步为文字链接。
 */

import React from 'react';
import { ConfigProvider, Pagination } from '@abiz/rc-miccn';

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}

export default () => {
  return (
    <ConfigProvider>
      <Pagination total={500} itemRender={itemRender} />
    </ConfigProvider>
  );
};
```
