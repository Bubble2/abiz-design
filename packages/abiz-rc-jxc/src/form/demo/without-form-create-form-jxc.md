---
order: 19
---

```tsx
/**
 * title: 自行处理表单数据
 * desc: <span></span>`Form` 具有自动收集数据并校验的功能，但如果您不需要这个功能，或者默认的行为无法满足业务需求，可以选择自行处理数据。
 */

import React, { useState } from 'react';
import { ConfigProvider, Form, InputNumber } from '@abiz/rc-jxc';

function validatePrimeNumber(number) {
  if (number === 11) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
  return {
    validateStatus: 'error',
    errorMsg: 'The prime between 8 and 12 is 11!',
  };
}

const formItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 12 },
};

const RawForm = () => {
  const [number, setNumber] = useState({
    value: 11,
  });

  const tips =
    'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';

  const onNumberChange = value => {
    setNumber({
      ...validatePrimeNumber(value),
      value,
    });
  };

  return (
    <Form>
      <Form.Item
        {...formItemLayout}
        label="Prime between 8 & 12"
        validateStatus={number.validateStatus}
        help={number.errorMsg || tips}
      >
        <InputNumber
          min={8}
          max={12}
          value={number.value}
          onChange={onNumberChange}
        />
      </Form.Item>
    </Form>
  );
};

export default () => {
  return (
    <ConfigProvider>
      <RawForm />
    </ConfigProvider>
  );
};
```
