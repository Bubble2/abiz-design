---
order: 6
---

```tsx
/**
 * title: 附加内容
 * desc: 在TimePicker选择框底部显示自定义的内容。
 */

import React from 'react';
import { ConfigProvider, TimePicker, Button } from '@abiz/rc-aeps';

class TimePickerAddonDemo extends React.Component {
  state = { open: false };

  handleOpenChange = open => {
    this.setState({ open });
  };

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <TimePicker
        open={this.state.open}
        onOpenChange={this.handleOpenChange}
        renderExtraFooter={() => (
          <Button size="small" type="primary" onClick={this.handleClose}>
            Ok
          </Button>
        )}
      />
    );
  }
}

export default () => {
  return (
    <ConfigProvider>
      <TimePickerAddonDemo />
    </ConfigProvider>
  );
};
```
