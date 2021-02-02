"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _rcCore.Button;
  }
});
Object.defineProperty(exports, "Gcc", {
  enumerable: true,
  get: function get() {
    return _rcCore.Gcc;
  }
});
Object.defineProperty(exports, "ConfigProvider", {
  enumerable: true,
  get: function get() {
    return _configProvider.default;
  }
});

var _rcCore = require("@abiz/rc-core");

var _configProvider = _interopRequireDefault(require("./configProvider"));

require("./style/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }