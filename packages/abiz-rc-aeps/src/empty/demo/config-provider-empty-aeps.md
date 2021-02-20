---
order: 3
---

```tsx
/**
 * title: 全局化配置
 * desc: 自定义全局组件的 Empty 样式。
 */

import React from 'react';
import {
  ConfigProvider,
  Switch,
  Divider,
  TreeSelect,
  Select,
  Cascader,
  Transfer,
  Table,
  List,
} from '@abiz/rc-aeps';
import { SmileOutlined } from '@abiz/icons-aeps';

const customizeRenderEmpty = () => (
  <div style={{ textAlign: 'center' }}>
    <SmileOutlined style={{ fontSize: 20 }} />
    <p>Data Not Found</p>
  </div>
);

const style = { width: 200 };

class Demo extends React.Component {
  state = {
    customize: false,
  };

  render() {
    const { customize } = this.state;
    return (
      <div>
        <Switch
          unCheckedChildren="default"
          checkedChildren="customize"
          checked={customize}
          onChange={val => {
            this.setState({ customize: val });
          }}
        />

        <Divider />

        <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
          <div className="config-provider">
            <h4>Select</h4>
            <Select style={style} />

            <h4>TreeSelect</h4>
            <TreeSelect style={style} treeData={[]} />

            <h4>Cascader</h4>
            <Cascader style={style} options={[]} showSearch />

            <h4>Transfer</h4>
            <Transfer />

            <h4>Table</h4>
            <Table
              style={{ marginTop: 8 }}
              columns={[
                {
                  title: 'Name',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: 'Age',
                  dataIndex: 'age',
                  key: 'age',
                },
              ]}
            />

            <h4>List</h4>
            <List />
          </div>
        </ConfigProvider>
      </div>
    );
  }
}

export default () => {
  return (
    <ConfigProvider>
      <Demo />
    </ConfigProvider>
  );
};
```
