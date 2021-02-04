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
Object.defineProperty(exports, "ConfigProvider", {
  enumerable: true,
  get: function get() {
    return _configProvider.default;
  }
});

var _button = _interopRequireDefault(require("./button"));

var _configProvider = _interopRequireDefault(require("./configProvider"));

require("./style/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }