---
order: 3.1
---

```tsx
/**
 * title: 必选样式
 * desc: 通过`requiredMark`切换必选与可选样式。
 */

import React, { useState } from 'react';
import { ConfigProvider, Form, Input, Button, Radio } from '@abiz/rc-aeps';
import { InfoCircleOutlined } from '@abiz/icons-aeps';

type RequiredMark = boolean | 'optional';

const FormLayoutDemo = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>(
    'optional',
  );

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ requiredMark }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
    >
      <Form.Item label="Required Mark" name="requiredMark">
        <Radio.Group>
          <Radio.Button value="optional">Optional</Radio.Button>
          <Radio.Button value>Required</Radio.Button>
          <Radio.Button value={false}>Hidden</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Field A" required tooltip="This is a required field">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Field B"
        tooltip={{
          title: 'Tooltip with customize icon',
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default () => {
  return (
    <ConfigProvider>
      <FormLayoutDemo />
    </ConfigProvider>
  );
};
```
