---
order: 3
---

```tsx
/**
 * title: 按钮样式
 * desc: 按钮样式的单选组合。
 */

import React from 'react';
import { ConfigProvider, Radio } from '@abiz/rc-jxc';

function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}

export default () => {
  return (
    <ConfigProvider>
      <>
        <Radio.Group onChange={onChange} defaultValue="a">
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b">Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
        <Radio.Group
          onChange={onChange}
          defaultValue="a"
          style={{ marginTop: 16 }}
        >
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b" disabled>
            Shanghai
          </Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
        <Radio.Group
          disabled
          onChange={onChange}
          defaultValue="a"
          style={{ marginTop: 16 }}
        >
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b">Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
      </>
    </ConfigProvider>
  );
};
```
