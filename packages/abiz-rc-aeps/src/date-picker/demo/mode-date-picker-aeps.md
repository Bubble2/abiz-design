---
order: 99
---

```tsx
/**
 * title: 受控面板
 * desc: 通过组合`mode`与`onPanelChange`控制要展示的面板。
 */

import React from 'react';
import { ConfigProvider, DatePicker, Space } from '@abiz/rc-aeps';

const { RangePicker } = DatePicker;

class ControlledDatePicker extends React.Component {
  state = { mode: 'time' };

  handleOpenChange = open => {
    if (open) {
      this.setState({ mode: 'time' });
    }
  };

  handlePanelChange = (value, mode) => {
    this.setState({ mode });
  };

  render() {
    return (
      <DatePicker
        mode={this.state.mode}
        showTime
        onOpenChange={this.handleOpenChange}
        onPanelChange={this.handlePanelChange}
      />
    );
  }
}

class ControlledRangePicker extends React.Component {
  state = {
    mode: ['month', 'month'],
    value: [],
  };

  handlePanelChange = (value, mode) => {
    this.setState({
      value,
      mode: [
        mode[0] === 'date' ? 'month' : mode[0],
        mode[1] === 'date' ? 'month' : mode[1],
      ],
    });
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value, mode } = this.state;
    return (
      <RangePicker
        placeholder={['Start month', 'End month']}
        format="YYYY-MM"
        value={value}
        mode={mode}
        onChange={this.handleChange}
        onPanelChange={this.handlePanelChange}
      />
    );
  }
}

export default () => {
  return (
    <ConfigProvider>
      <Space direction="vertical" size={12}>
        <ControlledDatePicker />
        <ControlledRangePicker />
      </Space>
    </ConfigProvider>
  );
};
```
