---
order: 3
---

```tsx
/**
 * title: 可选择标签
 * desc: 可通过`CheckableTag`实现类似Checkbox的效果，点击切换选中效果。>该组件为完全受控组件，不支持非受控用法。
 */

import React from 'react';
import { ConfigProvider, Tag } from '@abiz/rc-aeps';

const { CheckableTag } = Tag;

const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

class HotTags extends React.Component {
  state = {
    selectedTags: ['Books'],
  };

  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  }

  render() {
    const { selectedTags } = this.state;
    return (
      <>
        <span style={{ marginRight: 8 }}>Categories:</span>
        {tagsData.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </>
    );
  }
}

export default () => {
  return (
    <ConfigProvider>
      <HotTags />
    </ConfigProvider>
  );
};
```
