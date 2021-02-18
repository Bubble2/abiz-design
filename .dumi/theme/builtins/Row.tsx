import { ConfigProvider, Row } from '@abiz/rc-jxc';

export default ({ children, ...props }) => {
  return (
    <ConfigProvider>
      <Row {...props}>{children}</Row>
    </ConfigProvider>
  );
};
