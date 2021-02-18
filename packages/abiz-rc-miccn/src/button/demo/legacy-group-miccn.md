```tsx
/**
 * title: 废弃的 Block 组
 * desc: Debug usage
 */

import React from 'react';
import { ConfigProvider, Button, Tooltip } from '@abiz/rc-miccn';
import { DownloadOutlined } from '@ant-design/icons';

function getGroup(props) {
  return (
    <div>
      <Button.Group {...props}>
        <Button type="primary">Button 1</Button>
        <Button type="primary">Button 2</Button>
        <Tooltip title="Tooltip">
          <Button type="primary" icon={<DownloadOutlined />} disabled />
        </Tooltip>
        <Tooltip title="Tooltip">
          <Button type="primary" icon={<DownloadOutlined />} />
        </Tooltip>
      </Button.Group>
    </div>
  );
}

export default () => {
  return (
    <ConfigProvider>
      <>
        {getGroup({ size: 'small' })}
        <br />
        {getGroup()}
        <br />
        {getGroup({ size: 'large' })}
      </>
    </ConfigProvider>
  );
};
```

```css
#components-button-demo-legacy-group .ant-btn {
  margin: 0;
}
```
