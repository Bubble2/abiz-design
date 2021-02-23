---
order: 22
---

```tsx
/**
 * title: 隐藏已选择选项
 * desc: 隐藏下拉列表中已选择的选项。
 */

import React from 'react';
import { ConfigProvider, Select } from '@abiz/rc-miccn';

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

class SelectWithHiddenSelectedOptions extends React.Component {
  state = {
    selectedItems: [],
  };

  handleChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    return (
      <Select
        mode="multiple"
        placeholder="Inserted are removed"
        value={selectedItems}
        onChange={this.handleChange}
        style={{ width: '100%' }}
      >
        {filteredOptions.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
    );
  }
}

export default () => {
  return (
    <ConfigProvider>
      <SelectWithHiddenSelectedOptions />
    </ConfigProvider>
  );
};
```
