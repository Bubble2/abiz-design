```tsx
/**
 * title: 文案展现
 * desc: 给评分组件加上文案展示。
 */

import React from 'react';
import { ConfigProvider, Rate } from '@abiz/rc-jxc';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Rater extends React.Component {
  state = {
    value: 3,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
    );
  }
}

export default () => {
  return (
    <ConfigProvider>
      <Rater />
    </ConfigProvider>
  );
};
```
