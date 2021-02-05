import {ConfigProvider, Col } from '@abiz/rc-core';

export default ({ children, ...props }) => {
  return <ConfigProvider><Col {...props}>{children}</Col></ConfigProvider>;
};
