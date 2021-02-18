```tsx
/**
 * title: 省略号
 * desc: 多行文本省略。
 */

import React from 'react';
import { ConfigProvider, Typography } from '@abiz/rc-miccn';

const { Paragraph } = Typography;

export default () => {
  return (
    <ConfigProvider>
      <>
        <Paragraph ellipsis>
          Ant Design, a design language for background applications, is refined
          by Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by
          Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team.
        </Paragraph>

        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
          Ant Design, a design language for background applications, is refined
          by Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by
          Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team.
        </Paragraph>
      </>
    </ConfigProvider>
  );
};
```
