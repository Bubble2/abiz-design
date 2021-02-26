import React from 'react';
import SourceCode from 'dumi-theme-default/src/builtins/SourceCode';

export default React.forwardRef(({ children, ...props }, ref) => {
  return (
    <SourceCode {...props} forwardedRef={ref}>
      <>{children}</>
    </SourceCode>
  );
});
