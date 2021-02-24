---
order: 6.1
---

```tsx
/**
 * title: 自定义表单控件
 * desc: 自定义或第三方的表单控件，也可以与Form组件一起使用。只要该组件遵循以下的约定：>-提供受控属性`value`或其它与[`valuePropName`](https://ant.design/components/form/#getFieldDecorator-参数)的值同名的属性。>-提供`onChange`事件或[`trigger`](https://ant.design/components/form/#getFieldDecorator-参数)的值同名的事件。
 */

import React, { useState } from 'react';
import { ConfigProvider, Form, Input, Select, Button } from '@abiz/rc-jxc';

const { Option } = Select;

interface PriceValue {
  number?: number;
  currency?: 'rmb' | 'dollar';
}

interface PriceInputProps {
  value?: PriceValue;
  onChange?: (value: PriceValue) => void;
}

const PriceInput: React.FC<PriceInputProps> = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState(0);
  const [currency, setCurrency] = useState('rmb');

  const triggerChange = changedValue => {
    if (onChange) {
      onChange({ number, currency, ...value, ...changedValue });
    }
  };

  const onNumberChange = e => {
    const newNumber = parseInt(e.target.value || 0, 10);
    if (Number.isNaN(number)) {
      return;
    }
    if (!('number' in value)) {
      setNumber(newNumber);
    }
    triggerChange({ number: newNumber });
  };

  const onCurrencyChange = newCurrency => {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }
    triggerChange({ currency: newCurrency });
  };

  return (
    <span>
      <Input
        type="text"
        value={value.number || number}
        onChange={onNumberChange}
        style={{ width: 100 }}
      />
      <Select
        value={value.currency || currency}
        style={{ width: 80, margin: '0 8px' }}
        onChange={onCurrencyChange}
      >
        <Option value="rmb">RMB</Option>
        <Option value="dollar">Dollar</Option>
      </Select>
    </span>
  );
};

const Demo = () => {
  const onFinish = values => {
    console.log('Received values from form: ', values);
  };

  const checkPrice = (rule, value) => {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject('Price must be greater than zero!');
  };

  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      initialValues={{
        price: {
          number: 0,
          currency: 'rmb',
        },
      }}
    >
      <Form.Item name="price" label="Price" rules={[{ validator: checkPrice }]}>
        <PriceInput />
      </Form.Item>
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