import { ConfigProvider, Col } from '@abiz/rc-jxc';

export default ({ children, ...props }) => {
  return (
    <ConfigProvider>
      <Col {...props}>{children}</Col>
    </ConfigProvider>
  );
};
