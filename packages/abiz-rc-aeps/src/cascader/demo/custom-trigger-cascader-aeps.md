---
order: 2
---

```tsx
/**
 * title: 可以自定义显示
 * desc: 切换按钮和结果分开。
 */

import React from 'react';
import { ConfigProvider, Cascader } from '@abiz/rc-aeps';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
      },
    ],
  },
];

class CitySwitcher extends React.Component {
  state = {
    text: 'Unselect',
  };

  onChange = (value, selectedOptions) => {
    this.setState({
      text: selectedOptions.map(o => o.label).join(', '),
    });
  };

  render() {
    return (
      <span>
        {this.state.text}
        &nbsp;
        <Cascader options={options} onChange={this.onChange}>
          <a href="#">Change city</a>
        </Cascader>
      </span>
    );
  }
}

export default () => {
  return (
    <ConfigProvider>
      <CitySwitcher />
    </ConfigProvider>
  );
};
```
