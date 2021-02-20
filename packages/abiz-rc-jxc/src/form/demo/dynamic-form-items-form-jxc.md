---
order: 4.1
---

```tsx
/**
 * title: 动态增减嵌套字段
 * desc: 嵌套表单字段需要对 `field` 进行拓展，将 `field.name` 和 `field.fieldKey` 应用于控制字段。
 */

import React from 'react';
import { ConfigProvider, Form, Input, Button, Space } from '@abiz/rc-jxc';
import { MinusCircleOutlined, PlusOutlined } from '@abiz/icons-jxc';

const Demo = () => {
  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <Space
                key={field.key}
                style={{ display: 'flex', marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...field}
                  name={[field.name, 'first']}
                  fieldKey={[field.fieldKey, 'first']}
                  rules={[{ required: true, message: 'Missing first name' }]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, 'last']}
                  fieldKey={[field.fieldKey, 'last']}
                  rules={[{ required: true, message: 'Missing last name' }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
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
