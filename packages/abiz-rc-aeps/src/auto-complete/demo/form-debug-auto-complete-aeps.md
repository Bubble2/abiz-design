---
order: 999
---

```tsx
/**
 * title: 在 Form 中 Debug
 * desc: null
 */

import React from 'react';
import {
  ConfigProvider,
  Input,
  AutoComplete,
  Form,
  TreeSelect,
  Button,
} from '@abiz/rc-aeps';
import { SearchOutlined } from '@abiz/icons-aeps';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

export default () => {
  return (
    <ConfigProvider>
      <Form style={{ margin: '0 auto' }} {...formItemLayout}>
        <Form.Item label="单独 AutoComplete">
          <AutoComplete />
        </Form.Item>
        <Form.Item label="单独 TreeSelect">
          <TreeSelect />
        </Form.Item>
        <Form.Item label="添加 Input.Group 正常">
          <Input.Group compact>
            <TreeSelect style={{ width: '30%' }} />
            <AutoComplete />
          </Input.Group>
        </Form.Item>
        <Form.Item label="包含 search 图标正常">
          <AutoComplete>
            <Input suffix={<SearchOutlined />} />
          </AutoComplete>
        </Form.Item>
        <Form.Item label="同时有 Input.Group 和图标发生移位">
          <Input.Group compact>
            <TreeSelect style={{ width: '30%' }} />
            <AutoComplete>
              <Input suffix={<SearchOutlined />} />
            </AutoComplete>
          </Input.Group>
        </Form.Item>
        <Form.Item label="同时有 Input.Group 和 Search 组件发生移位">
          <Input.Group compact>
            <TreeSelect style={{ width: '30%' }} />
            <AutoComplete>
              <Input.Search />
            </AutoComplete>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Input Group 和 Button 结合">
          <Input.Group compact>
            <TreeSelect style={{ width: '20%' }} />
            <AutoComplete>
              <Input.Search />
            </AutoComplete>
            <Button type="primary" icon={<SearchOutlined />}>
              Search
            </Button>
          </Input.Group>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};
```
