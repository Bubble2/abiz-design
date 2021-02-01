"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});
Object.defineProperty(exports, "Gcc", {
  enumerable: true,
  get: function get() {
    return _Gcc.default;
  }
});
Object.defineProperty(exports, "ConfigProvider", {
  enumerable: true,
  get: function get() {
    return _ConfigProvider.default;
  }
});
exports.default = void 0;

var _Button = _interopRequireDefault(require("./Button"));

var _Gcc = _interopRequireDefault(require("./Gcc"));

var _ConfigProvider = _interopRequireDefault(require("./ConfigProvider"));

require("./style/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = '@ant-design/icons';
exports.default = _default;