---
order: 7
---

```tsx
/**
 * title: 联动
 * desc: 省市联动是典型的例子。推荐使用 [Cascader](/components/cascader/) 组件。
 */

import React from 'react';
import { ConfigProvider, Select } from '@abiz/rc-jxc';

const { Option } = Select;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

const App = () => {
  const [cities, setCities] = React.useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = React.useState(
    cityData[provinceData[0]][0],
  );

  const handleProvinceChange = value => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = value => {
    setSecondCity(value);
  };

  return (
    <>
      <Select
        defaultValue={provinceData[0]}
        style={{ width: 120 }}
        onChange={handleProvinceChange}
      >
        {provinceData.map(province => (
          <Option key={province}>{province}</Option>
        ))}
      </Select>
      <Select
        style={{ width: 120 }}
        value={secondCity}
        onChange={onSecondCityChange}
      >
        {cities.map(city => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
    </>
  );
};

export default () => {
  return (
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
};
```
