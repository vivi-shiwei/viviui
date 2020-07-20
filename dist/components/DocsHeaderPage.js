"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

const Header = props => /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
  pos: "fixed",
  as: "header",
  top: "0",
  zIndex: "4",
  left: "0",
  right: "0",
  borderBottomWidth: "1px",
  width: "full"
}, props));

exports.Header = Header;