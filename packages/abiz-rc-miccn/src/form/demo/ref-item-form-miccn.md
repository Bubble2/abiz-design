---
order: 999999
---

```tsx
/**
 * title: 引用字段
 * desc: 请优先使用`ref`！
 */

import React from 'react';
import { ConfigProvider, Button, Form, Input } from '@abiz/rc-miccn';

const Demo = () => {
  const [form] = Form.useForm();
  const ref = React.useRef();

  return (
    <Form form={form} initialValues={{ list: ['light'] }}>
      <Form.Item name="test" label="test">
        <Input ref={ref} />
      </Form.Item>

      <Form.List name="list">
        {fields =>
          fields.map(field => (
            <Form.Item key={field.key} {...field}>
              <Input ref={ref} />
            </Form.Item>
          ))
        }
      </Form.List>

      <Button
        type="button"
        onClick={() => {
          form.getFieldInstance('test').focus();
        }}
      >
        Focus Form.Item
      </Button>
      <Button
        onClick={() => {
          form.getFieldInstance(['list', 0]).focus();
        }}
      >
        Focus Form.List
      </Button>
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
