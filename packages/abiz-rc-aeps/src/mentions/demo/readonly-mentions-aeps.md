---
order: 4
---

```tsx
/**
 * title: 无效或只读
 * desc: 通过 `disabled` 属性设置是否生效。通过 `readOnly` 属性设置是否只读。
 */

import React from 'react';
import { ConfigProvider, Mentions } from '@abiz/rc-aeps';

const { Option } = Mentions;

function getOptions() {
  return ['afc163', 'zombiej', 'yesmeck'].map(value => (
    <Option key={value} value={value}>
      {value}
    </Option>
  ));
}

function App() {
  return (
    <>
      <div style={{ marginBottom: 10 }}>
        <Mentions
          style={{ width: '100%' }}
          placeholder="this is disabled Mentions"
          disabled
        >
          {getOptions()}
        </Mentions>
      </div>
      <Mentions
        style={{ width: '100%' }}
        placeholder="this is readOnly Mentions"
        readOnly
      >
        {getOptions()}
      </Mentions>
    </>
  );
}

export default () => {
  return (
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
};
```
