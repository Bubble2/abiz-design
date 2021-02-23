---
order: 11
---

```tsx
/**
 * title: 三种大小
 * desc: 三种大小的输入框，若不设置，则为`default`。
 */

import React from 'react';
import { ConfigProvider, DatePicker, Radio, Space } from '@abiz/rc-miccn';

const { RangePicker } = DatePicker;

class PickerSizesDemo extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <Space direction="vertical" size={12}>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <DatePicker size={size} />
        <DatePicker size={size} picker="month" />
        <RangePicker size={size} />
        <DatePicker size={size} picker="week" />
      </Space>
    );
  }
}

export default () => {
  return (
    <ConfigProvider>
      <PickerSizesDemo />
    </ConfigProvider>
  );
};
```
