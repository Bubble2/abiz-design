"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _icons = require("@ant-design/icons");

Object.keys(_icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _icons[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icons[key];
    }
  });
});

require("./iconfont");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Icon = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var IconFont = (0, _icons.createFromIconfontCN)({});
  return /*#__PURE__*/_react.default.createElement(IconFont, _extends({}, props, {
    forwardedRef: ref
  }));
});

var _default = Icon;
exports.default = _default;