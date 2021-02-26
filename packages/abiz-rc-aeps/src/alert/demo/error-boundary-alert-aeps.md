---
order: 8
---

```tsx
/**
 * title: ErrorBoundary
 * desc: 友好的[React错误处理](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html)包裹组件。
 */

import React, { useState } from 'react';
import { ConfigProvider, Button, Alert } from '@abiz/rc-aeps';

const { ErrorBoundary } = Alert;
const ThrowError: React.FC = () => {
  const [error, setError] = useState<Error>();
  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };

  if (error) {
    throw error;
  }
  return (
    <Button danger onClick={onClick}>
      Click me to throw a error
    </Button>
  );
};

export default () => {
  return (
    <ConfigProvider>
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    </ConfigProvider>
  );
};
```
