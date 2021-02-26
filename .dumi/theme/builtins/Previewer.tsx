import React, { useContext } from 'react';
import Previewer from 'dumi-theme-default/src/builtins/Previewer';
import { context } from 'dumi/theme';

export default React.forwardRef(({ children, ...props }, ref) => {
  const sourcesCode = props.sources._;
  console.log(`sourcesCode`, sourcesCode);
  return (
    <Previewer {...props} forwardedRef={ref}>
      <>{children}</>
    </Previewer>
  );
});
