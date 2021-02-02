"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _button.default;
  }
});
Object.defineProperty(exports, "Gcc", {
  enumerable: true,
  get: function get() {
    return _gcc.default;
  }
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function get() {
    return _row.default;
  }
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: function get() {
    return _col.default;
  }
});
Object.defineProperty(exports, "ConfigProvider", {
  enumerable: true,
  get: function get() {
    return _configProvider.default;
  }
});
exports.default = void 0;

var _button = _interopRequireDefault(require("./button"));

var _gcc = _interopRequireDefault(require("./gcc"));

var _row = _interopRequireDefault(require("./row"));

var _col = _interopRequireDefault(require("./col"));

var _configProvider = _interopRequireDefault(require("./configProvider"));

require("./style/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = '@ant-design/icons';
exports.default = _default;