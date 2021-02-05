import {ConfigProvider, Row } from '@abiz/rc-core';

export default ({ children, ...props }) => {
  return <ConfigProvider><Row {...props}>{children}</Row></ConfigProvider>;
};
