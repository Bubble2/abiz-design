---
order: 99
---

```tsx
/**
 * title: Dep Debug
 * desc: Buggy!
 */

import React from 'react';
import { ConfigProvider, Form, Input } from '@abiz/rc-aeps';

let acc = 0;

const Demo = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="debug"
      initialValues={{
        debug1: 'debug1',
        debug2: 'debug2',
      }}
    >
      <Form.Item noStyle dependencies={['debug1']}>
        {() => {
          return acc++;
          // return <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>;
        }}
      </Form.Item>
      <Form.Item label="debug1" name="debug1">
        <Input />
      </Form.Item>
      <Form.Item label="debug2" name="debug2">
        <Input />
      </Form.Item>
    </Form>
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