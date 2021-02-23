function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import './iconfont';
export * from '@ant-design/icons';
var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var IconFont = createFromIconfontCN({});
  return /*#__PURE__*/React.createElement(IconFont, _extends({}, props, {
    forwardedRef: ref
  }));
});
export default Icon;