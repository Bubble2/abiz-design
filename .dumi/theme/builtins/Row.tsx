import {Row} from '@abiz-rc-core'

export default ({ children, ...props}) => {
  return (
    <Row {...props}>
      {children}
    </Row>
  );
};
